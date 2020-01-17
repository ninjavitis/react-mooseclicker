class Api::CollectiblesController < ApplicationController
  def index
  end

  def collection
    if current_user
      collection = current_user.collectibles.includes(:ctype).order(created_at: :desc)
      .map{ |collectible| 
        {
          # collectible_object(collectible.level,collectible.clicks,collectible.created_at,collectible.ctype.name, collectible.ctype.desc,collectible.ctype.image)
          id:collectible.id,
          level:collectible.level,
          clicks:collectible.clicks,
          created:collectible.created_at, 
          name:collectible.ctype.name, 
          desc:collectible.ctype.desc, 
          image:collectible.ctype.image
        }
      }

      render json: collection
    else
      render json: current_user.errors, status:422
    end
  end

  def create
    collectible = current_user.collectibles.new(
      ctype_id:collectible_params[:ctype_id],
      clicks:0,
      level:1
    )

    if collectible.save
      # set as the displayed collectible
      current_user.activeCollectible = collectible.id
      current_user.save
      render json: collectible
    else
      render json: collectible.errors, status:422
    end
  end

  def show
    # render json: Collectible.find_by(id:current_user.activeCollectible)
    render json: complete_collectible
  end

  def click
    Collectible.click(current_user, active_collectible)
    render json: {collectible:complete_collectible, user:current_user}
  end


  private

  def complete_collectible
    complete_collectible = {c:active_collectible, t:active_collectible.ctype}
  end

  def collectible_params
    params.require(:collectible).permit(:ctype_id)
  end

  def collectible_object(level, clicks, created_at, type, desc, image)
    # name:type is the name of the ctype
    {level:level, clicks:clicks, created_at:created_at, name:type, desc:desc, image:image}
  end

  def active_collectible
    # active_collectible = Collectible.find_by(id:current_user.activeCollectible)
    active_collectible = Collectible.find_by(id:current_user.activeCollectible)

    # active_collectible = Collectible.find_by_sql
    # "
    #   SELECT *
    #   FROM collectibles
    #   JOIN ctypes
    #   ON collectibles.ctype_id = ctypes.id
    #   WHERE collectibles.id = 35
    # "
  end

end

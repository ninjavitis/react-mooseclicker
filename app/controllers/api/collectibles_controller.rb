class Api::CollectiblesController < ApplicationController
  before_action :authenticate_user!, :except => [:show, :index]
  def index
  end

  def collection
    if current_user
      collection = current_user.collectibles.includes(ctype: :artist).order(created_at: :desc)
      .map{ |collectible| 
        {
          id:collectible.id,
          level:collectible.level,
          clicks:collectible.clicks,
          clicksToLevel:collectible.clicksToLevel,
          created_at:collectible.created_at, 
          name:collectible.ctype.name,
          type:collectible.ctype.name, 
          desc:collectible.ctype.desc, 
          image:collectible.ctype.image,
          artist:collectible.ctype.artist.name,
          tier:collectible.ctype.tier,
          draggable_type:'collectible',
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
    collectible = Collectible.make_from_object(active_collectible)
    render json: collectible
  end

  def click
    Collectible.click(current_user, active_collectible)
    collectible = Collectible.make_from_object(active_collectible)

    render json: {collectible:collectible, user:current_user}
  end


  private

  def collectible_params
    params.require(:collectible).permit(:ctype_id)
  end

  def active_collectible
    active_collectible = Collectible.find(current_user.activeCollectible)
  end
end
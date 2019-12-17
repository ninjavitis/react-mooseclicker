class Api::CollectiblesController < ApplicationController
  def index
  end

  def collection
    if current_user
      collection = current_user.collectibles.includes(:ctype)
      .map{ |collectible| 
        {
          # collectible_object(collectible.level,collectible.clicks,collectible.created_at,collectible.ctype.name, collectible.ctype.desc,collectible.ctype.image)
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
      level:0
    )

    if collectible.save
      render json: collectible
    else
      render json: collectible.errors, status:422
    end
  end

  private

  def collectible_params
    params.require(:collectible).permit(:ctype_id)
  end

  def collectible_object(level, clicks, created_at, type, desc, image)
    # name:type is the name of the ctype
    {level:level, clicks:clicks, created_at:created_at, name:type, desc:desc, image:image}
  end

end

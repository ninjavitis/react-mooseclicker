class Api::CollectiblesController < ApplicationController
  def index
  end

  def collection
    if current_user
      render json: current_user.collectibles.joins(:ctype)
    else
      render json: current_user.errors, status:422
    end
  end

  def create
    collectible = current_user.collectibles.new(
      cType_id:collectible_params[:cType_id],
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
    params.require(:collectible).permit(:cType_id)
  end

end

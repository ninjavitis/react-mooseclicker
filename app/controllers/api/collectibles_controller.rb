class Api::CollectiblesController < ApplicationController
  def index
  end

  def create
    collectible = Collectible.new(
      user_id:current_user.id,
      cType_id:collectible_params[:cType_id],
      clicks:0,
      level:1
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

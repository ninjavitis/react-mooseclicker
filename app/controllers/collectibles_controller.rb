class CollectiblesController < ApplicationController
  def index
    render json: Collectibles.all
  end
end

class Api::CollectiblesController < ApplicationController
  def index
    render json: Collectible.all
  end
end

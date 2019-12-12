class Api::CtypesController < ApplicationController
  def index
    render json: CType.all
  end
end

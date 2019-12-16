class Api::CtypesController < ApplicationController
  def index
    render json: Ctype.all
  end
end

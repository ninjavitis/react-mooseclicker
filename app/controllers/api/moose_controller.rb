class Api::MooseController < ApplicationController

  def index
    render json: current_user.moose.all
  end

  def show
    render json: Moose.find_by(id:current_user.activeMoose)
  end
end

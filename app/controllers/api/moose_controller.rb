class Api::MooseController < ApplicationController
  def find
  
  end

  def activeMoose
    render json: current_user.activeMoose
  end
end

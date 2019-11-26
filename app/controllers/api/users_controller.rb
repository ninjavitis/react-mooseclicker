class Api::UsersController < ApplicationController
  # Uncomment this when user registrations are working


  def click
    User.click(current_user, active_moose)
    render json: active_moose
  end

  #used to set the initial click count on login
  def getClickCount
    render json: current_user.mooseclicks
  end

  private

  def active_moose
    active_moose = Moose.find_by(id:current_user.activeMoose)
  end

end
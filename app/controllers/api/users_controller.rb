class Api::UsersController < ApplicationController
  # Uncomment this when user registrations are working

  def mooseclick
    current_user.increment!(:mooseclicks)
    current_user.touch(:lastclick)
    render json: current_user.mooseclicks
  end

end
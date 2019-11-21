class Api::UsersController < ApplicationController
  # Uncomment this when user registrations are working

  def mooseclick
    if current_user.remainingClicks > 0
      current_user.increment!(:mooseclicks)
      current_user.decrement!(:remainingClicks)
      current_user.touch(:lastclick)
      render json: current_user.mooseclicks
    else
      render json: current_user.errors, status:422 
    end
  end

  #used to set the initial click count on login
  def getClickCount
    render json: current_user.mooseclicks
  end



end
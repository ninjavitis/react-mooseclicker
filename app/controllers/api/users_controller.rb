class Api::UsersController < ApplicationController
  # Uncomment this when user registrations are working

  def mooseclick
    current_user.mooseclick++
    current_user.lastclick = now()
    current_user.save
    render user.to_json(:only => [ :mooseclicks, :name ])
  end

end
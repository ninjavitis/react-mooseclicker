class Api::UsersController < ApplicationController
  before_action :configure_permitted_parameters, if: :devise_controller?

  def show
    if current_user
      render json: current_user
    else
      render json: current_user.errors, status:422
    end
  end

  #this sets the collectible that is considered 'active' for display and interaction
  def updateActive()
    current_user.activeCollectible = active_collectible_params[:activeCollectible]
    c = Collectible.find(current_user.activeCollectible)
    collectible = Collectible.make_from_object(c)
    
    if current_user.save
      render json: collectible
    end
  end

  def add_points
    User.add_points(current_user, points_params[:points])
  end

  def sub_points
    User.sub_points(current_user, points_params[:points])
  end

  def add_clicks
    User.add_clicks(current_user, clicks_params[:remainingClicks])
  end

  def sub_clicks
    User.sub_clicks(current_user, clicks_params[:remainingClicks])
  end


  private

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:activeCollectible,:points,:remainingClicks)
  end

  def active_collectible_params
    params.require(:user).permit(:activeCollectible)
  end

  def points_params
    params.permit(:points)
  end

  def clicks_params
    params.permit(:remainingClicks)
  end

  #TODO remove this
  # def active_moose
  #   active_moose = Moose.find_by(id:current_user.activeMoose)
  # end
  # END TODO

end
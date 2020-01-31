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
    collectible = Collectible.make(
      c.id, 
      c.level, 
      c.clicks, 
      c.created_at, 
      c.ctype.name, 
      c.ctype.desc, 
      c.ctype.image
    )
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

  #TODO remove this
  # def click
  #   Moose.click(current_user, active_moose)
  #   # current_user
  #   render json: {moose:active_moose, user:current_user}
  #   # {mooseClicks:active_moose.clicks, user:current_user.remainingClicks}
  # end

  # def myMoose
  #   render json: current_user.mooses
  # end
  # END TODO

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
class Api::UsersController < ApplicationController
  before_action :configure_permitted_parameters, if: :devise_controller?

  def show
    if current_user
      render json: current_user
    else
      render json: current_user.errors, status:422
    end
  end

  def updateActive()
    current_user.activeCollectible = active_collectible_params[:activeCollectible]
    current_user.save
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
    devise_parameter_sanitizer.permit(:activeCollectible)
  end

  def active_collectible_params
    params.permit(:activeCollectible)
  end

  #TODO remove this
  # def active_moose
  #   active_moose = Moose.find_by(id:current_user.activeMoose)
  # end
  # END TODO

end
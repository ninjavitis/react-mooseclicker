class Api::MooseController < ApplicationController
  def find
  
  end

  def activeMoose
    render json: current_user.activeMoose
  end

  def testCreate
    current_user.createMoose(1)
  end
end

# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  def createMoose(user_id)
    moose = Moose.new(moose_params)
    moose.save
  end

  private

  def moose_params
    params.require(:moose).permit(:user_id)
  end
end

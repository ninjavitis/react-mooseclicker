class Api::SetsController < ApplicationController

  def check_hand
    render JSON ItemSet.potential_matches(check_hand_params)
  end

  private

  def check_hand_params
    params.require(:item_ids)
  end
end
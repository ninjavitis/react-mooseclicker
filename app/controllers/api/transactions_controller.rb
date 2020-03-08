class Api::TransactionsController < ApplicationController
  before_action :authenticate_user!, :except => [:show, :index]


  def index
  end

  def index_by_user
    user = User.find(params[:user_id])
    render json: user.transactions
  end

  def show
  end

  def create(user_id, category)
    
    transaction = transaction.new(
      user
      
    )

  end

  def update
  end

  def destroy
  end

  private

  def transaction_params
    params.require(:transaction).permit()
  end
end

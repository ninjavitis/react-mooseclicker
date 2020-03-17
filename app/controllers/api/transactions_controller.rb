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

  def create(user_id, category, amount)
    transaction = transaction.new(
      user_id:user_id,
      category:category? category : 'undefined',
      amount:amount,
    )
  end

  def update
  end

  def destroy
  end

  private

  def transaction_params
    params.require(:transaction).permit(:user_id, :category)
  end
end

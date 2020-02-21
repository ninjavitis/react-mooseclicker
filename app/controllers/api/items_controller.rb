class Api::ItemsController < ApplicationController
  def index
    items =[
      {name:'Points', items:PointsItem.all, curr:'$'},
      {name:'Collectibles', items:Ctype.all, curr:'CP'},
      {name:'Clicks', items:ClicksItem.all, curr:'CP'},
    ]

    render json: items
  end

  def clicks
    render json: ClicksItem.all
  end

  def points
    render json: PointsItem.all
  end



  def create

  end

  def show
  end

  def update
  end
end

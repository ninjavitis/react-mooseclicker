Rails.application.routes.draw do
  namespace :api do
  end
  mount_devise_token_auth_for 'User', at: 'api/auth', controllers:
  {
    registrations: 'registrations',
  }

  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'api/collectibles', to: 'api/ctypes#index'
  get 'api/collectibles/myCollection', to: 'api/collectibles#collection'
  get 'api/collectibles/show', to: 'api/collectibles#show'
  put 'api/collectibles/click', to: 'api/collectibles#click'
  post 'api/collectibles/create', to: 'api/collectibles#create'

  put 'api/users/updateActive', to: 'api/users#updateActive'
  put 'api/users/addPoints', to: 'api/users#add_points'
  put 'api/users/subPoints', to: 'api/users#sub_points'
  put 'api/users/addClicks', to: 'api/users#add_clicks'
  put 'api/users/subClicks', to: 'api/users#sub_clicks'
  get 'api/user/show', to: 'api/users#show'
  
  get 'api/items/', to: 'api/items#index'
  
  # TODO remove when transition to collectible schema is complete
  # get 'api/user/click', to: 'api/users#click'
  # post 'api/moose/new', to: 'api/moose#newMoose'
  # get 'api/moose/show', to: 'api/moose#show'
  # get 'api/user/myMoose', to: 'api/users#myMoose'

end

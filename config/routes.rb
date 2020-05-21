Rails.application.routes.draw do
  namespace :set_definitions do
    get 'api/index'
    get 'api/create'
    get 'api/update'
    get 'api/destroy'
    get 'api/show'
  end
  namespace :set_controller do
    get 'api/index'
    get 'api/create'
    get 'api/update'
    get 'api/destroy'
    get 'api/show'
  end
  # get 'transaction/index'
  # get 'transaction/show'
  # get 'transaction/create'
  # get 'transaction/update'
  # get 'transaction/destroy'
  # get 'items_controller/index'
  # get 'items_controller/create'
  # get 'items_controller/show'
  # get 'items_controller/update'
  
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
  get 'api/items/clicks', to: 'api/items#clicks'
  get 'api/items/points', to: 'api/items#points'

  get 'api/transactions/', to: 'api/transactions#index'
  get 'api/transactions/user', to: 'api/transactions#index_by_user'

  get 'api/setDefinitions/', to: 'api/set_definitions#index'
  
  # TODO remove when transition to collectible schema is complete
  # get 'api/user/click', to: 'api/users#click'
  # post 'api/moose/new', to: 'api/moose#newMoose'
  # get 'api/moose/show', to: 'api/moose#show'
  # get 'api/user/myMoose', to: 'api/users#myMoose'

end

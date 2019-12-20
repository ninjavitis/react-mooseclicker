Rails.application.routes.draw do
  namespace :api do
  end
  mount_devise_token_auth_for 'User', at: 'api/auth', controllers:
  {
    registrations: 'registrations',
  }

  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'api/collectibles', to: 'api/ctypes#index'
  post 'api/collectibles/create', to: 'api/collectibles#create'
  get 'api/collectibles/myCollection', to: 'api/collectibles#collection'
  get 'api/collectibles/show', to: 'api/collectibles#show'
  put 'api/collectibles/click', to: 'api/collectibles#click'

  # TODO remove when transition to collectible schema is complete
  post 'api/moose/new', to: 'api/moose#newMoose'
  get 'api/moose/show', to: 'api/moose#show'
  get 'api/user/show', to: 'api/users#show'
  get 'api/user/click', to: 'api/users#click'
  get 'api/user/myMoose', to: 'api/users#myMoose'

end

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  
  get 'api/activeMoose', to: 'api/moose#activeMoose'
  get 'api/moose/click', to: 'api/users#mooseclick'
  get 'api/moose/clickcount', to: 'api/users#getClickCount'
end

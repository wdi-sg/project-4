Rails.application.routes.draw do

  # get 'users/index'
  match '/users',   to: 'users#index',   via: 'get'

  match '/users/:id',     to: 'users#show',       via: 'get'

  devise_for :users, :path_prefix => 'd'
  resources :users, :only =>[:show]

  # devise_for :users,
  #         path: '',
  #         path_names: {
  #           sign_in: 'login',
  #           sign_out: 'logout',
  #           sign_up: 'register'
  #         }
end

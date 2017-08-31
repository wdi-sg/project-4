Rails.application.routes.draw do

  # get 'users/new'

  # get 'users/index'
  match '/users',   to: 'users#index',   via: 'get'

  match '/users/:id',     to: 'users#show',       via: 'get'

  resources :users_admin, :controller => 'users'
  # :only =>[:show]

  devise_for :users,
          path: '',
          path_names: {
            sign_in: 'login',
            sign_out: 'logout',
            sign_up: 'register'
          }
end

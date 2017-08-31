Rails.application.routes.draw do

  # get 'users/new'

  # get 'users/index'

  root 'static#home'

  resources :create_users, :controller => 'users'
  # :only =>[:show]

  devise_for :users,
          path: '',
          path_names: {
            sign_in: 'login',
            sign_out: 'logout',
            sign_up: 'register'
          }
end

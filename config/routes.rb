Rails.application.routes.draw do

  get 'bookrooms/slots', as: :bookroom_slots
  post 'bookrooms/slots'
  # get 'users/new'

  get 'transactions', to: 'users#transactions'

  # get 'users/index'

  #  temporarily change to show react abilities. Using root 'static#home will redirect to nick's user page.
  # Using root 'statics#home will redirect to daniel's react page
  root 'static#home'
  # root 'statics#home'

  resources :meetingrooms
  resources :bookrooms
  resources :adverts
  resources :spaces, :controller => 'assets'

  # resources :bookevents

  # get 'bookevents', to: 'bookevents#show'
   post 'bookevents', to: 'bookevents#create'

  resources :create_users, :controller => 'users'
  # :only =>[:show]

  devise_for :users,
          path: '',
          path_names: {
            sign_in: 'login',
            sign_out: 'logout',
            sign_up: 'register'
          }

  resources :events

  post 'event', to:'event#booktix'
end

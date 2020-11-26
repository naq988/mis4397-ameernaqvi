Rails.application.routes.draw do
  devise_for :users
  resources :resources
  resources :preparedinfos
  devise_for :user_devises, path_names: {sign_in: "login",sign_out: "logout"}
  resources :maps
  resources :prepareds
  resources :homes
  
  root 'homes#index'
  #get 'homes/donate'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
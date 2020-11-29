Rails.application.routes.draw do
  get 'pages/home'

  devise_for :users
  resources :resources
  resources :preparedinfos
  resources :maps
  resources :prepareds
  resources :homes
  
  root 'homes#index'
  #get 'homes/donate'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

#Rails.application.routes.draw do

  #get 'pages/home'

  #devise_for :users
 # resources :resources
  #devise_for :user_devises
  #resources :maps
  #root 'homes#index'
# end





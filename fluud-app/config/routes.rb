Rails.application.routes.draw do
  resources :maps
  resources :prepareds
  resources :homes
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  resources :maps
  root 'homes#index'
end

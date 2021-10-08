Rails.application.routes.draw do
  resources :medicines
  resources :users
  resources :medicines, only: [:create, :index, :show, :destroy]
  resources :pharmacies

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  
  post "/medicines/new", to: "medicines#create"
  get "/medicines", to: "medicines#index"
  get "/medicines/:id", to: "medicines#show"
  patch "/medicines/:id/delete", to: "medicines#destroy"
  patch "/medicines/:id/update", to: "medicines#update"

 

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  
  resources :reservations
  resources :apartments, only: [:create]
  resources :users, only: [:create, :show]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
 
  post "/reservation", to: "sessions#create"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

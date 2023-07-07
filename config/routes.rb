Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # only needed for postman testing
  get "/games", to: "games#index"

  # nested resource routing since we want the user to be logged in to view more
  resources :users, only: [:show] do
    resources :games, only: [:index, :show, :create, :update, :destroy]
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

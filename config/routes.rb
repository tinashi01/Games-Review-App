Rails.application.routes.draw do
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # get "/reviews", to: "reviews#index"

  # resources :games, only: [:index]
  # resources :reviews, only: [:index]

  resources :games, only: [:index] do
    resources :reviews, only: [:index]
  end
  
  # nested resource routing since we want the user to be logged in to do more


  resources :users, only: [:show] do
    resources :reviews, only: [:index, :create, :update, :destroy]
  end

  # admin user routing


  resources :games, only: [:create, :update, :destroy]

  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

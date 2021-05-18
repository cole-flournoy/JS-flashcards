Rails.application.routes.draw do
  resources :groups, only: [:index, :create]
  
  resources :decks, only: [:index, :create]
  
  resources :cards, only: [:index, :create, :update]
  
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

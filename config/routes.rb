Rails.application.routes.draw do
  namespace :api do
    resources :posts do
      resources :votes
      resources :downvotes
    end
    resources :users do
      
        resources :votes
  end
end
end 
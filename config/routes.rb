Rails.application.routes.draw do
  namespace :api do
    resources :posts do
      resources :votes
    end
    resources :users do
      
        resources :votes
  end
end
end 
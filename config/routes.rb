Rails.application.routes.draw do
  root "portfolios#index"
  resources :portfolios, only: [:index] do
    collection do
      get :about
      get :frema
      get :famire
      get :papachat
      get :chatspace
      get :works
    end
  end
end

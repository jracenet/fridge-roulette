Rails.application.routes.draw do
  root 'home#index'

  defaults format: :json do
    get 'recipes/search', to: 'recipes#search_by_ingredients'
  end
end

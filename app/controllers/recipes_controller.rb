class RecipesController < ApplicationController
  def search_by_ingredients
    render json: { recipes: [] }, status: :ok
  end
end
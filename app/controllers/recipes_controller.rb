class RecipesController < ApplicationController
  def search_by_ingredients
    render json: { recipes: Recipe.all }, status: :ok
  end
end
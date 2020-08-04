class RecipesController < ApplicationController
  def search_by_ingredients
    query = params[:query]

    matches = Recipe.search_by_ingredient(query).uniq
    render json: { recipes: matches }, status: :ok
  end
end
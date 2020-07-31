class RecipesController < ApplicationController
  def search_by_ingredients
    query = params[:query]
    matches = Recipe.joins(:ingredients).where('ingredients.raw_marmiton_entry LIKE :query', query: "%#{query}%")

    render json: { recipes: matches }, status: :ok
  end
end
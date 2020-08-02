require "i18n"

class RecipesController < ApplicationController
  def search_by_ingredients
    query = I18n.transliterate(params[:query])
    matches = Recipe.search_by_ingredient(query).uniq

    render json: { recipes: matches }, status: :ok
  end
end
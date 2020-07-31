class RecipesController < ApplicationController
  def search_by_ingredients
    render json: {}, status: :ok
  end
end
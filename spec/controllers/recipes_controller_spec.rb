require "rails_helper"

RSpec.describe RecipesController, type: :controller do
  describe "GET search_by_ingredients" do
    subject { get :search_by_ingredients }

    it { is_expected.to have_http_status(:success)}
  end
end
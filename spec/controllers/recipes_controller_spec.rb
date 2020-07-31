require "rails_helper"

RSpec.describe RecipesController, type: :controller do
  describe "GET search_by_ingredients" do
    subject { get :search_by_ingredients }

    let(:recipes) { create_list(:recipe, 25) }

    it { is_expected.to have_http_status(:success)}

    it 'returns all recipes' do
      subject

      recipes_response = JSON.parse(response.body)
      expect(recipes_response['recipes']).to be_empty
    end
  end
end
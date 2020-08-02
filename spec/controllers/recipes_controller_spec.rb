require "rails_helper"

RSpec.describe RecipesController, type: :controller do
  describe "GET search_by_ingredients" do
    subject { get :search_by_ingredients }

    it { is_expected.to have_http_status(:success)}

    let(:cake_recipe) {
      recipe = create(:recipe, name: 'Cake dough')
      recipe.ingredients.create!([
        {
          raw_marmiton_entry: '150gr of flour'
        },
        {
          raw_marmiton_entry: '3 eggs'
        },
        {
          raw_marmiton_entry: '150gr of flour'
        }
      ])

      recipe
    }

    let(:salade_recipe) {
      recipe = create(:recipe, name: 'Caesar salad')
      recipe.ingredients.create!([
        {
          raw_marmiton_entry: '1 romana salad'
        },
        {
          raw_marmiton_entry: '3 chicken breasts'
        },
        {
          raw_marmiton_entry: '1 egg'
        },
        {
          raw_marmiton_entry: 'Oil'
        },
        {
          raw_marmiton_entry: 'Dijon mustard'
        }
      ])

      recipe
    }

    let(:ratatouille_recipe) {
      recipe = create(:recipe, name: 'Ratatouille')
      recipe.ingredients.create!([
        {
          raw_marmiton_entry: '3 red peppers'
        },
        {
          raw_marmiton_entry: '3 courgettes'
        },
        {
          raw_marmiton_entry: '1 onion'
        },
        {
          raw_marmiton_entry: 'Oil'
        },
      ])

      recipe

    }

    let(:recipes) {
      [ cake_recipe, salade_recipe, ratatouille_recipe ]
    }

    before do
      recipes
    end

    context 'one ingredient' do
      subject { get :search_by_ingredients, params: { query: 'egg' } }

      it 'returns recipes that use eggs' do
        subject
        recipes_response = JSON.parse(response.body)

        expect(recipes_response['recipes']).to eq [cake_recipe, salade_recipe].as_json
      end
    end

    context 'multiple ingredients' do
      subject { get :search_by_ingredients, params: { query: 'egg Oil' } }

      it 'returns recipes that use both eggs and oil' do
        subject
        recipes_response = JSON.parse(response.body)

        expect(recipes_response['recipes']).to eq [salade_recipe].as_json
      end
    end
    end
end
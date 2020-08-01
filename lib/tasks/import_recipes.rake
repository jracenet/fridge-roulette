require "json"

desc "Import recipes and their ingredients from the Marmiton extract file"

task :import_recipes => :environment do
  clean_tables!
  recipes_as_json = open_extract_file
  import_recipes_in_db! recipes_as_json
end

private
def clean_tables!
  Ingredient.destroy_all
  Recipe.destroy_all
end

def open_extract_file
  recipes_file_path = File.join(Rails.root, 'lib', 'assets', 'recipes.json')
  jsonified_recipes = []
  errors = []

  File.open recipes_file_path do |file|
    file.each_line do |recipe_entry|
      begin
        jsonified_recipes << JSON.parse(recipe_entry)
      rescue
        errors << recipe_entry
      end
    end
  end

  jsonified_recipes
end

def import_recipes_in_db!(recipes_as_json)
  recipes_as_json.each do |recipe|
    ActiveRecord::Base.transaction do
      recipe_record = Recipe.create(name: recipe['name'])
      ingredients = recipe['ingredients'].map do |ingredient|
        { raw_marmiton_entry: ingredient  }
      end

      recipe_record.ingredients.create!(ingredients)
    end
  end
end
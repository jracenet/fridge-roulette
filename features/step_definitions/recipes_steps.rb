Before do
  ratatouille = Recipe.create!(name: 'Ratatouille')

  ratatouille.ingredients.create([
    {raw_marmiton_entry: "Peppers"},
    {raw_marmiton_entry: "Tomatoes"},
    {raw_marmiton_entry: "Eggplants"}
  ])
  piperade = Recipe.create!(name: 'Piperade')
  piperade.ingredients.create([
    {raw_marmiton_entry: "Peppers"},
    {raw_marmiton_entry: "Tomatoes"},
    {raw_marmiton_entry: "Eggplants"}
  ])

  poivron_farci = Recipe.create!(name: 'Poivron farci')
  poivron_farci.ingredients.create([
    {raw_marmiton_entry: "Peppers"},
    {raw_marmiton_entry: "Meat"},
  ])
end

When('I search for recipes containing {string}') do |string|
 ingredients_field = @browser.text_field("data-testid": 'add-ingredient')
 valid_ingredient_btn = @browser.button("data-testid": 'add-ingredient-btn')

 ingredients = string.split(",")

 ingredients.each do |ingr|
  ingredients_field.send_keys ingr
  valid_ingredient_btn.click
 end
end

Then('these recipes should be suggested') do |table|
  recipes_list = @browser.elements("data-testid": "recipe")
  table.to_hash.each_with_index do |row, index|
    suggested_recipe = row.first
    expect(recipes_list[index].text).to eq suggested_recipe
  end
end

Given('these suggested recipes') do |table|
  # table is a Cucumber::MultilineArgument::DataTable
  pending # Write code here that turns the phrase above into concrete actions
end

When('I open the {string} recipe') do |string|
  pending # Write code here that turns the phrase above into concrete actions
end

Then('I should get all the information to cook it') do
  pending # Write code here that turns the phrase above into concrete actions
end

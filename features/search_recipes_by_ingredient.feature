Feature: Search recipes by ingredients
  Scenario: Find recipes by ingredient
    As a not inspired cooker
    I want to find recipes based on what I have in my fridge
    So I have some inspiration to cook a meal tonight

    When I search for recipes containing "Peppers, tomatoes"
    Then these recipes should be suggested
      | Ratatouille |
      | Piperade    |


  Scenario: Read the details of a recipe
    Given these suggested recipes
      | Ratatouille |
      | Piperade    |
    When I open the "Ratatouille" recipe
    Then I should get all the information to cook it
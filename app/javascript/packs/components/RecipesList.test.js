import React from 'react'
import { render } from '@testing-library/react'
import RecipesList from './RecipesList'
import { RECIPES_LIST_PLACEHOLDER } from './constants'

it('Displays a list of recipes', async () => {
  const recipesList = ['Ratatouille', 'Tian aux légumes']
  const container = render(<RecipesList recipes={recipesList} noMatchFound={false} loading={false}/>)

  const recipes = await container.findAllByTestId('recipe')
  expect(recipes.length).toBe(2)
})

it('Displays an invitation if no ingredients have been set', async () => {
  const recipesList = []
  const container = render(<RecipesList recipes={recipesList} noMatchFound={false} loading={false}/>)

  const placeholder = await container.findByText(RECIPES_LIST_PLACEHOLDER.empty)
  expect(placeholder).toBeTruthy()
})

it('Displays a loading message if query is not over', async () => {
  const recipesList = []
  const container = render(<RecipesList recipes={recipesList} noMatchFound={false} loading={true}/>)

  const placeholder = await container.findByText(RECIPES_LIST_PLACEHOLDER.loading)
  expect(placeholder).toBeTruthy()
})

it('Displays a "nothing found" message if no matches', async () => {
  const recipesList = []
  const container = render(<RecipesList recipes={recipesList} noMatchFound={true} loading={false}/>)

  const placeholder = await container.findByText(RECIPES_LIST_PLACEHOLDER.none)
  expect(placeholder).toBeTruthy()
})
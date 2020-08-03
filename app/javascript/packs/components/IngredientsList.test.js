import React from 'react'
import { render, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import IngredientsList from './IngredientsList'

it('Adds an ingredient when pressing enter in ingredient field', async () => {
  expect.assertions(4)

  const fakeSearch = (value) => {
    expect(value).toEqual('Tomato')
  }

  const container = render(<IngredientsList search={fakeSearch}/>)
  const ingredientInput = await container.findByTestId('add-ingredient')

  userEvent.type(ingredientInput, 'Tomato')
  userEvent.type(ingredientInput, '{enter}')

  expect(ingredientInput.value).toBe('')

  const ingredientsList = await container.findAllByTestId('added-ingredient')
  expect(ingredientsList.length).toBe(1)

  const { getByText } = await within(ingredientsList[0])

  expect(getByText('Tomato')).toBeTruthy()
})

it('Adds an ingredient when clicking add button', async () => {
  expect.assertions(4)

  const fakeSearch = (value) => {
    expect(value).toEqual('Tomato')
  }

  const container = render(<IngredientsList search={fakeSearch}/>)
  const ingredientInput = await container.findByTestId('add-ingredient')
  const ingredientValidButton = await container.findByTestId('add-ingredient-btn')

  userEvent.type(ingredientInput, 'Tomato')
  userEvent.click(ingredientValidButton)

  expect(ingredientInput.value).toBe('')

  const ingredientsList = await container.findAllByTestId('added-ingredient')
  expect(ingredientsList.length).toBe(1)

  const { getByText } = await within(ingredientsList[0])

  expect(getByText('Tomato')).toBeTruthy()
})
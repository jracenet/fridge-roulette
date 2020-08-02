import React from 'react'

export default class RecipesList extends React.Component {
  render() {
    const recipeElements = this.props.recipes.map((recipe) =>
      <li>{recipe.name}</li>
    )

    return <ul>
      {recipeElements}
    </ul>
  }
}
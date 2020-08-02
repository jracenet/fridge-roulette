import React from 'react'

export default class RecipesList extends React.Component {
  render() {
    const recipeElements = this.props.recipes.map((recipe) =>
      <li key={recipe.id}>{recipe.name}</li>
    )

    return <div className="recipes-list">
      <h2>Recettes possibles</h2>
      <ul>
        {recipeElements}
      </ul>
    </div>

  }
}
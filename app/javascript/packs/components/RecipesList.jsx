import React from 'react'

export default class RecipesList extends React.Component {
  render() {
    let recipeElements = this.props.recipes.map((recipe) =>
      <li key={recipe.id}>{recipe.name}</li>
    )

    if (recipeElements.length === 0) {
      recipeElements = <li className="placeholder">Renseignez au moins un ingrédient pour recevoir des suggestions
      de recette</li>
    }

    return <div className="recipes-list">
      <h2>Suggestions de recette</h2>
      <ul>
        {recipeElements}
      </ul>
    </div>

  }
}
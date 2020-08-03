import React from 'react'
import { RECIPES_LIST_PLACEHOLDER } from './constants'

const PLACEHOLDER_STATE = {
  none: "Aucune recette trouvée",
  empty: "Renseignez au moins un ingrédient pour recevoir des suggestions de recette",
  loading: "Recherche en cours"
}

export default class RecipesList extends React.Component {
  render() {
    return <div className="recipes-list">
      <h2>Suggestions de recette</h2>
      <ul>
        {this.recipeElements()}
      </ul>
    </div>
  }

  recipeElements() {
    if (this.props.loading) {
      return (<li className="placeholder" key="placeholder">
        {RECIPES_LIST_PLACEHOLDER.loading}
      </li>)
    }

    if (this.props.recipes.length === 0) {
      return (<li className="placeholder" key="placeholder">
        {(this.props.noMatchFound) ? RECIPES_LIST_PLACEHOLDER.none : RECIPES_LIST_PLACEHOLDER.empty}
      </li>)
    }

    return this.props.recipes.map((recipe) =>
      <li key={recipe.id} data-testid="recipe">{recipe.name}</li>
    )
  }
}
import React from 'react'
import axios from 'axios'
import IngredientsList from './IngredientsList'
import RecipesList from './RecipesList'

export default class RecipeSearcher extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipesList: []
    }
    this.triggerSearch = this.search.bind(this)
  }

  render() {
    return (
      <div className="app-main">
        <IngredientsList search={this.triggerSearch} />
        <RecipesList recipes={this.state.recipesList} />
      </div>
    )
  }

  async search(e) {
    const query = e.target.value
    const res = await axios.get('/recipes/search', {
      params: { query }
    })

    this.setState({
      recipesList: res.data.recipes
    })


  }
}
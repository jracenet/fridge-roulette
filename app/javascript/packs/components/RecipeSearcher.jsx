import React from 'react'
import axios from 'axios'
import IngredientsList from './IngredientsList'
import RecipesList from './RecipesList'

export default class RecipeSearcher extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipesList: [],
      noMatchFound: false,
      loading: false
    }
    this.triggerSearch = this.search.bind(this)
  }

  render() {
    return (
      <div className="app-main">
        <IngredientsList search={this.triggerSearch} />
        <RecipesList
          recipes={this.state.recipesList}
          noMatchFound={this.state.noMatchFound}
          loading={this.state.loading} />
      </div>
    )
  }

  async search(query) {
    this.setState({
      noMatchFound: false,
      loading: true
    })

    try {
      const res = await axios.get('/recipes/search', {
        params: { query }
      })

      this.setState({
        recipesList: res.data.recipes,
        noMatchFound: res.data.recipes.length === 0,
        loading: false
      })
    } catch (e) {
      console.error(e)
    }

  }
}
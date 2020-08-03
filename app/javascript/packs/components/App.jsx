import React from 'react'
import RecipeSearcher from './RecipeSearcher'
import 'packs/styles/App.sass'

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <h1>🍳 FridgeRoulette</h1>
        <RecipeSearcher />
      </div>
    )
  }
}

export default App

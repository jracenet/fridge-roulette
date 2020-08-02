import React from 'react'
import RecipeSearcher from './RecipeSearcher'
import 'packs/styles/App.sass'

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <RecipeSearcher />
      </div>
    )
  }
}

export default App

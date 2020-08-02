import React from 'react'

export default class IngredientsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newIngredientValue: '',
      ingredients: []
    }

    this.onAddIngredient = this.addIngredient.bind(this)
    this.onRemoveIngredient = this.removeIngredient.bind(this)
  }

  render() {
    return (<div className="ingredients-list">
      <h2>Dans mon frigo</h2>
      <input value={this.newIngredientValue}
        onChange={(e) => { this.setState({ newIngredientValue: e.target.value }) }} />
      <button onClick={this.onAddIngredient}>+</button>

      <ul>
        {this.selectedIngredients()}
      </ul>
    </div>)
  }

  addIngredient(e) {
    e.preventDefault()

    this.state.ingredients.push(this.state.newIngredientValue.repeat(1))
    this.setState({ newIngredientValue: '' })

    this.props.search(this.state.ingredients.join(','))
  }

  removeIngredient(index) {
    this.state.ingredients.splice(index, 1)

    this.props.search(this.state.ingredients.join(','))
  }

  selectedIngredients() {
    return (
      this.state.ingredients.map((ingredient, index) =>
        <li key={ingredient}>
          {ingredient}
          <button onClick={(e) => { this.removeIngredient(index) }}>X</button>
        </li>
      )
    )
  }
}
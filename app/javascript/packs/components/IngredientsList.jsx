import React from 'react'

export default class IngredientsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newIngredientValue: '',
      ingredients: []
    }

    this.onClick = this.handleClick.bind(this)
    this.onEnter = this.handleKeyPress.bind(this)
    this.onRemoveIngredient = this.removeIngredient.bind(this)
  }

  render() {
    return (<div className="ingredients-list">
      <h2>Mon frigo</h2>
      <fieldset className="ingredient-adder">
        <div className="form-group">
          <input
            placeholder="Tapez le nom d'un ingrédient ici"
            value={this.state.newIngredientValue}
            onChange={(e) => { this.setState({ newIngredientValue: e.target.value }) }}
            onKeyPress={this.onEnter}
          />
          <button onClick={this.onClick}>Ajouter</button>
        </div>
      </fieldset>
      <ul className="ingredients-added">
        {this.selectedIngredients()}
      </ul>
    </div>)
  }

  handleClick(e) {
    e.preventDefault()
    this.addIngredient()
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.addIngredient()
      e.preventDefault()
    }
  }

  addIngredient() {
    if (this.state.newIngredientValue.trim() === "") {
      return
    }

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
          <button onClick={(e) => { this.removeIngredient(index) }}>Enlever</button>
        </li>
      )
    )
  }
}
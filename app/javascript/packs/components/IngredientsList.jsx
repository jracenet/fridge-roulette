import React from 'react'

export default class IngredientsList extends React.Component {
  render() {
    return (<>
      <input onBlur={this.props.search} />
    </>)
  }
}
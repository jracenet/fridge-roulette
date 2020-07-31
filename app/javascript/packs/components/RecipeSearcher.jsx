import React from 'react'

export default class RecipeSearcher extends React.Component {
  constructor(props) {
    super(props)
    this.triggerSearch = this.search.bind(this)
  }

  render() {
    return (
      <div>
        <input onBlur={this.triggerSearch}></input>
        <ul>
          <li>Recipe 1</li>
        </ul>
      </div>
    )
  }

  search(e) {
    const query = e.target.value
  }
}
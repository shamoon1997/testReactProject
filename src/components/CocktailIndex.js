import React from 'react'
import { Link } from 'react-router-dom'

import CocktailCard from './CocktailCard'

class CocktailIndex extends React.Component {

  constructor(props) {
    super(props)
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.state = {
      drinks: props.drinks
    }
    this.setState({ drinks: props.drinks })
  }
  componentDidMount() {
    this.setState({ drinks: this.props.drinks })
  }
  handleFilterChange(event) {
    const filter = event.target.value
    console.log("asd", filter);
    console.log(this.state.drinks)
  }
  render() {
    if (!this.props.drinks) return null
    return (
      <div>
        <div className="field">
          <div className="control" onChange={this.handleFilterChange}>
            <label className="radio">
              <input type="radio" name="searchFilter" value="Alcoholic" defaultChecked={true} /> alcoholic
            </label>
            <label className="radio">
              <input type="radio" name="searchFilter" value="Non_Alcoholic" /> Non alcoholic
            </label>
          </div>
        </div>
        <div className="columns is-multiline">
          {this.props.drinks.map(cocktail =>
            <div key={cocktail.idDrink} className="column is-one-fifth-desktop is-one-third-tablet">
              <Link to={`/cocktails/${cocktail.idDrink}`}>
                <CocktailCard {...cocktail} />
              </Link>
            </div>

          )}
        </div>
      </div>
    )
  }
}

export default CocktailIndex

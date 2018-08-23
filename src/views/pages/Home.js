import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import RecipeCard from '../partials/RecipeCard.js';
import '../../App.css'

var _updated = false
class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
    this.handleTextSearch = this.handleTextSearch.bind(this)
  }
  componentDidMount(){
    _updated = false
    this.props.get_recipe_list();
  }
  handleTextSearch(e) {
    e.preventDefault()
    var text_search = e.target.value.toLowerCase()
    var regex = new RegExp( text_search, 'i' )
		var drinks = Array.from(this.props.recipe_list.drinks)
		var allDrinks = drinks.filter(cocktail => cocktail.strDrink.match(regex))
    this.setState({
      results: allDrinks
    })
  }
  componentDidUpdate(){
    if (Object.keys(this.props.recipe_list).length > 0 && !_updated) {
      this.setState({
        results: this.props.recipe_list.drinks
      })
      _updated = true
    }
  }
  render() {
    return(
      <div className="mt-1">
        <div className="row">
          <div className="col-12">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2 col-12" type="search" placeholder="Search" onChange={(e) => this.handleTextSearch(e)}/>
            </form>
          </div>
        </div>
        <div className="row">
          { Object.keys(this.state.results).length > 0 &&
              this.state.results.map((recipe, recipe_index) => {
                return (
                  <NavLink to={'/recipe/' + recipe.idDrink} key={recipe_index} className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <RecipeCard my_recipe={recipe} {...this.props}/>
                  </NavLink>
                )
              })
          }
        </div>
      </div>
    );
  }
}
export default Page;

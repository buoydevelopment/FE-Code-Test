import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import RecipeCard from '../partials/RecipeCard.js';
import '../../App.css'
class Page extends Component {
  componentDidMount() {
    this.props.get_recipe_list();
    //let data_var = 'Templete de React.JS con Bootstrap y sus dependencias. Para proyecto Inicial.';
    //this.props.set_test(data_var);
  }
  componentDidUpdate(){
    console.log(this.props.recipe_list)
  }
  render() {
    return(
      <div className="mt-5">
        <div className="row">
          { Object.keys(this.props.recipe_list).length > 0 &&
              this.props.recipe_list.drinks.map((recipe, recipe_index) => {
                return (
                  <NavLink to={'/recipe/' + recipe.idDrink} key={recipe_index} className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <RecipeCard recipe_id={recipe.idDrink} {...this.props}/>
                  </NavLink>
                )
              }
            )
          }
        </div>
      </div>
    );
  }
}
export default Page;

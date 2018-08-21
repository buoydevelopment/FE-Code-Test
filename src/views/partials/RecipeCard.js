import React, { Component } from 'react';
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
                  <div className="card mt-3">
                    <div className="row no-gutters">
                      <div className="col">
                        <div className="card-block mx-3">
                          <h5 className="mt-3 card-title"><b>{recipe.strDrink}</b></h5>
                          <p className="card-text">
                            <ul style={{ paddingLeft: 0.9 + 'rem' }}>
                              <li className="line-height">{recipe.strIngredient1}</li>
                              <li className="line-height">{recipe.strIngredient2}</li>
                              <li className="li-non-styled small">y 4 ingredientes mas.</li>
                            </ul>
                          </p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <img src={recipe.strDrinkThumb} className="img-card rounded m-3" style={{ marginLeft: 0 + " !important" }} alt=""/>
                      </div>
                    </div>
                  </div>
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

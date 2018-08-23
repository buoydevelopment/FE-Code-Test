import React, { Component } from 'react';
import '../../App.css'
class Page extends Component {
  componentDidMount() {
    //let data_var = 'Templete de React.JS con Bootstrap y sus dependencias. Para proyecto Inicial.';
    //this.props.set_test(data_var);
    this.props.get_recipe(this.props.match.params.id);
  }
  componentDidUpdate(){
    console.log(this.props.recipe.drinks[0]);
  }
  render() {
    return(
      <div className="col card mt-3">
        <div className="row">
        {this.props.recipe &&
          this.props.recipe.drinks &&
            <div className="col-12">
              <h1>{this.props.recipe.drinks[0].strDrink}</h1>
              <p>
                <img src={this.props.recipe.drinks[0].strDrinkThumb} className="img-responsive" alt=""/>
              </p>
              <p>
                <ul>
                  {this.props.recipe.drinks[0].strMeasure1 &&
                    this.props.recipe.drinks[0].strIngredient1 &&
                      <li>{this.props.recipe.drinks[0].strMeasure1 + " " + this.props.recipe.drinks[0].strIngredient1}</li>
                  }
                  {this.props.recipe.drinks[0].strMeasure2 &&
                    this.props.recipe.drinks[0].strIngredient2 &&
                      <li>{this.props.recipe.drinks[0].strMeasure2 + " " + this.props.recipe.drinks[0].strIngredient2}</li>
                  }
                  {this.props.recipe.drinks[0].strMeasure3 &&
                    this.props.recipe.drinks[0].strIngredient3 &&
                      <li>{this.props.recipe.drinks[0].strMeasure3 + " " + this.props.recipe.drinks[0].strIngredient3}</li>
                  }
                  {this.props.recipe.drinks[0].strMeasure4 &&
                    this.props.recipe.drinks[0].strIngredient4 &&
                      <li>{this.props.recipe.drinks[0].strMeasure4 + " " + this.props.recipe.drinks[0].strIngredient4}</li>
                  }
                  {this.props.recipe.drinks[0].strMeasure5 &&
                    this.props.recipe.drinks[0].strIngredient5 &&
                      <li>{this.props.recipe.drinks[0].strMeasure5 + " " + this.props.recipe.drinks[0].strIngredient5}</li>
                  }
                  {this.props.recipe.drinks[0].strMeasure6 &&
                    this.props.recipe.drinks[0].strIngredient6 &&
                      <li>{this.props.recipe.drinks[0].strMeasure6 + " " + this.props.recipe.drinks[0].strIngredient6}</li>
                  }
                  {this.props.recipe.drinks[0].strMeasure7 &&
                    this.props.recipe.drinks[0].strIngredient7 &&
                      <li>{this.props.recipe.drinks[0].strMeasure7 + " " + this.props.recipe.drinks[0].strIngredient7}</li>
                  }
                  {this.props.recipe.drinks[0].strMeasure8 &&
                    this.props.recipe.drinks[0].strIngredient8 &&
                      <li>{this.props.recipe.drinks[0].strMeasure8 + " " + this.props.recipe.drinks[0].strIngredient8}</li>
                  }
                  {this.props.recipe.drinks[0].strMeasure9 &&
                    this.props.recipe.drinks[0].strIngredient9 &&
                      <li>{this.props.recipe.drinks[0].strMeasure9 + " " + this.props.recipe.drinks[0].strIngredient9}</li>
                  }
                  {this.props.recipe.drinks[0].strMeasure10 &&
                    this.props.recipe.drinks[0].strIngredient10 &&
                      <li>{this.props.recipe.drinks[0].strMeasure10 + " " + this.props.recipe.drinks[0].strIngredient10}</li>
                  }
                  {this.props.recipe.drinks[0].strMeasure11 &&
                    this.props.recipe.drinks[0].strIngredient11 &&
                      <li>{this.props.recipe.drinks[0].strMeasure11 + " " + this.props.recipe.drinks[0].strIngredient11}</li>
                  }
                  {this.props.recipe.drinks[0].strMeasure12 &&
                    this.props.recipe.drinks[0].strIngredient12 &&
                      <li>{this.props.recipe.drinks[0].strMeasure12 + " " + this.props.recipe.drinks[0].strIngredient12}</li>
                  }
                  {this.props.recipe.drinks[0].strMeasure13 &&
                    this.props.recipe.drinks[0].strIngredient13 &&
                      <li>{this.props.recipe.drinks[0].strMeasure13 + " " + this.props.recipe.drinks[0].strIngredient13}</li>
                  }
                  {this.props.recipe.drinks[0].strMeasure14 &&
                    this.props.recipe.drinks[0].strIngredient14 &&
                      <li>{this.props.recipe.drinks[0].strMeasure14 + " " + this.props.recipe.drinks[0].strIngredient14}</li>
                  }
                  {this.props.recipe.drinks[0].strMeasure15 &&
                    this.props.recipe.drinks[0].strIngredient15 &&
                      <li>{this.props.recipe.drinks[0].strMeasure15 + " " + this.props.recipe.drinks[0].strIngredient15}</li>
                  }
                </ul>
              </p>
              <h3>How to prepare:</h3>
              <p>{this.props.recipe.drinks[0].strInstructions}</p>
            </div>
        }
        </div>
      </div>
    );
  }
}
export default Page;

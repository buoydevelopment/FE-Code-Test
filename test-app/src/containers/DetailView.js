import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Card from '../components/Card';

class DetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktails: [],
      id: null,
      name: '',
      ingredients: [],
      measures: [],
      image: '',
      instructions: ''
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.services.fetchCocktailDetail(id)
      .then((res) => {
        const drink = res.drinks[0];
        this.setState((prevState, props) => {
          return {
            cocktails: [res],
            id: drink.idDrink,
            name: drink.strDrink,
            ingredients: [drink.strIngredient1, drink.strIngredient2, drink.strIngredient3, drink.strIngredient4, drink.strIngredient5, drink.strIngredient6, drink.strIngredient6, drink.strIngredient7, drink.strIngredient8, drink.strIngredient9, drink.strIngredient10, drink.strIngredient11, drink.strIngredient12, drink.strIngredient13, drink.strIngredient14, drink.strIngredient15],
            measures: [drink.strMeasure1, drink.strMeasure2, drink.strMeasure3, drink.strMeasure4, drink.strMeasure5, drink.strMeasure6, drink.strMeasure7, drink.strMeasure8, drink.strMeasure9, drink.strMeasure10, drink.strMeasure11, drink.strMeasure12, drink.strIngredient13, drink.strIngredient14, drink.strIngredient15],
            image: drink.strDrinkThumb,
            instructions: drink.strInstructions
          };
        });
      })
  }

  render() {
    const { id, name } = this.state;
    return (
      <div className="detail-wrapper">
        <div className="detail-title-wrapper">
          <Link to="/">
            <span className="back-arrow" role="img" aria-label="Back">&#x21D0;</span>
          </Link>
          <h4 className="detail-title">{name}</h4>
        </div>
        {(id !== null) ?
          (<Fragment>   
            <Card
              vertical
              {...this.state}
            />
          </Fragment>)
        : <Spinner />} 
      </div>
    );
  }
}

export default DetailView;

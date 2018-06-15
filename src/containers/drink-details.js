import React, {Component} from 'react';
import DrinkDetailsComponent from '../components/drink-details';
import Loader from '../components/loader';
import {DRINKS_DETAILS_ENDPOINT} from '../utils/constants';

const normalizeDrinkDetails = (drinks) => {
  // The API responds with an array with one element
  const details = drinks[0];

  //Each ingredient and measure is a key in the object
  // I will transform them to arrays
  const MAX_INGREDIENTS_AMOUNT = 15;
  const ingredients = [];
  const measures = [];
  for (let index = 1; index < MAX_INGREDIENTS_AMOUNT; index++) {
    const currentIngredient = details[`strIngredient${index}`].trim();
    const currentMeasure = details[`strMeasure${index}`].trim();
    if (!!currentIngredient && !!currentMeasure) {
      ingredients.push(currentIngredient);
      measures.push(currentMeasure);
    } else{
      break;
    }
  }
  return {
    id: details.idDrink,
    name: details.strDrink,
    thumb: details.strDrinkThumb,
    instructions: details.strInstructions,
    ingredients,
    measures,
  }
}


class DrinkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      drinkDetails: {}
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    let drinkDetails = JSON.parse(sessionStorage.getItem(`drink${id}`));
    if (drinkDetails) {
      this.setState({
        drinkDetails,
        isLoading: false
      })
    } else {
      fetch(`${DRINKS_DETAILS_ENDPOINT}${id}`)
        .then(response => response.json())
        .then(({drinks}) => {
          const drink = normalizeDrinkDetails(drinks);
          sessionStorage.setItem(`drink${id}`, JSON.stringify(drink))
          this.setState({
            drinkDetails: drink,
            isLoading: false
          })
        })
        .catch(e => console.error('Error fetching drink details: ', e));
    }
  }

  render(){
    const {drinkDetails, isLoading} = this.state;
    return isLoading ? <Loader />: <DrinkDetailsComponent {...drinkDetails} />
  }
}

export default DrinkList;
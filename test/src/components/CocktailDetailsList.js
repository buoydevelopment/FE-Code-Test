import React from 'react';
import CocktailItem from "./CocktailItem";
import styles from './CocktailDetailsList.module.css'
import axios from 'axios';
import Context from '../Context';
import CocktailDetailItem from "./CocktailDetailItem";

class CocktailDetailsList extends React.Component {

  static contextType = Context;

  constructor(props) {
    super(props);

    this.state = {
      cocktails: []
    };


  }


  componentDidMount() {

    this.context.setLoading(true);
    axios.get(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id} `).then(response => {
      debugger;
      this.context.setTitle(response.data.drinks[0].strDrink);


      response.data.drinks.forEach((drink) => {
        const ingredents = [];
        let haveIngredents = true;
        let n = 1;

        while (haveIngredents) {
          const ingredent = drink[`strIngredient${n}`];
          if (ingredent) {
            ingredents.push(ingredent);
          } else {
            haveIngredents = false;
          }
          n++;
        }

        drink.ingredents = ingredents;

      });

      //debugger;
      this.setState({
        cocktails: response.data.drinks.map(elem => ({
          name: elem.strDrink,
          description: '',
          id: elem.idDrink,
          instructions: elem.strInstructions,
          ingredents: elem.ingredents,
          image: elem.strDrinkThumb
        })
        )
      })
      ;

      this.context.setLoading(false);

    });
  }

  render() {
    return (
    <div>
      {this.state.cocktails.map(c => (
      <div key={c.id} className={styles.cocktailContainer}>
        <CocktailDetailItem cocktail={c}/>
      </div>
      )
      )}
    </div>
    );
  }
}

CocktailDetailsList.propTypes = {};

export default CocktailDetailsList;

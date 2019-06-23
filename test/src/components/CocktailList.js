import React from 'react';
import CocktailItem from "./CocktailItem";
import styles from './CocktailList.module.css'
import axios from 'axios';
import Context from '../Context';

class CocktailList extends React.Component {

  static contextType = Context;

  constructor(props) {
    super(props);

    this.state = {
      cocktails: []
    };


  }


  componentDidMount() {
    this.context.setTitle('Random Drinks 0.1');
    this.context.setLoading(true);
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass').then(response => {

      //debugger;
      this.setState({
        cocktails: response.data.drinks.map(elem => ({
          name: elem.strDrink,
          id: elem.idDrink,
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
        <CocktailItem cocktail={c}/>
      </div>
      )
      )}
    </div>
    );
  }
}

CocktailList.propTypes = {};

export default CocktailList;

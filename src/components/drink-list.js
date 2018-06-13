import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';
import './drink-list.css';

const DrinkList = (props) => {
  const {drinkList, isLoading} = props;
  const cards = drinkList.map(drink => <Card key={drink.idDrink} id={drink.idDrink} title={drink.strDrink} thumb={drink.strDrinkThumb}/>);

  return <div className="drinkList">
    {isLoading ? <div>Loading...</div> : cards}
  </div>
}

DrinkList.propTypes = {
  drinkList: PropTypes.array,
  isLoading: PropTypes.bool,
}

DrinkList.defaultProps = {
  drinkList: [],
  isLoading: true,
};


export default DrinkList;
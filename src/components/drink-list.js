import React from 'react';
import Card from './card';
import './drink-list.css';

const drinkList = (props) => {
  const {drinkList, isLoading} = props;
  const cards = drinkList.map(drink => <Card key={drink.idDrink} id={drink.idDrink} title={drink.strDrink} thumb={drink.strDrinkThumb}/>);

  return <div className="drinkList">
    {isLoading ? <div>Loading...</div> : cards}
  </div>
}

// TODO: setDefaultProps and types
export default drinkList;
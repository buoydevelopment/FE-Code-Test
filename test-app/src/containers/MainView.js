import React from 'react';
import Card from '../components/Card';
import LoaderHOC from '../components/LoaderHOC';

const MainView = (props) => {
  const showDetails = (id) => {
    props.history.push(`/drinks/details/${id}`);
  }

  return (
    <div className="main-list">
      {props.cocktails && props.cocktails.map((c, i) => (
        <Card
          key={i}
          id={c.idDrink}
          name={c.strDrink}
          img={c.strDrinkThumb}
          ingredients={c.strIngredients}
          onClick={showDetails}
        />
      ))}
    </div>
  );
}

export default LoaderHOC('cocktails')(MainView);

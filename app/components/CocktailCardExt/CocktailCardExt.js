import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const renderIngredients = (item) => {
  if (!item) {
    return null;
  }

  return [...Array(15).keys()].map(
    (index, key) => (
      item[`strMeasure${index + 1}`] &&
      item[`strMeasure${index + 1}`].trim() != '' &&
      <li key={key}>{item[`strMeasure${index + 1}`]} - {item[`strIngredient${index + 1}`]}</li>
    )
  );
}

const CocktailCardExt = (props) => (
  <div className="cocktail-detail">
    <h3>{props.item.strDrink}</h3>
    <div className="cocktail-detail__body">
      <div className="cocktail-detail__thumbnail">
        <img src={props.item.strDrinkThumb} />
      </div>
      <ul className="cocktail-detail__ingredient-list">{ renderIngredients(props.item) }</ul>
      <p><strong>How to prepare:</strong></p>
      <p>
        {props.item.strInstructions}
      </p>
    </div>
  </div>
);

CocktailCardExt.propTypes = {
  item: PropTypes.any
};

export default CocktailCardExt;

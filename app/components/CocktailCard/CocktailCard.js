import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import './style.scss';

const CocktailCard = (props) => (
  <LazyLoad>
    <Link className="router-link" to={`/${props.item.idDrink}`}>
      <div className="cocktail-card-wrapper">
        <div className="cocktail-card">
          <div className="cocktail-card__drink-detail">
            <h3>{props.item.idDrink}</h3>
            <p>{props.item.strDrink}</p>
          </div>
          <div className="cocktail-card__thumbnail">
            <img src={props.item.strDrinkThumb} />
          </div>
        </div>
      </div>
    </Link>
  </LazyLoad>
);

CocktailCard.propTypes = {
  item: PropTypes.any
};

export default CocktailCard;

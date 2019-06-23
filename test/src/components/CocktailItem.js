import React from 'react';
import style from './CocktailItem.module.css';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const CocktailItem = props => {
  return (
  <Link to={`/${props.cocktail.id}`} style={{textDecoration:'unset'}}>
    <div className={style.container} >
      <div className={style.left}>
        <p className={style.title}>{props.cocktail.name}</p>
        <p className={style.description}>{props.cocktail.description}</p>
      </div>
      <div className={style.right}>
        <img className={style.image} alt={""} src={props.cocktail.image}/>
      </div>
    </div>
  </Link>
  );
};

CocktailItem.propTypes = {};

export default CocktailItem;


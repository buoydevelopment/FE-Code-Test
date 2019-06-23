import React from 'react';
import style from './CocktailDetailItem.module.css';
import PropTypes from 'prop-types';

const CocktailDetailItem = props => {
  return (
  <div className={style.container}>
    <div className={style.col}>
      <img className={style.image} alt={""} src={props.cocktail.image}/>
    </div>
    <div className={style.col}>

      <p  className={style.description}>Ingredents:</p>
      {
        props.cocktail.ingredents.map((i,index)=>(<p key={index} className={style.description}>{i}</p>))
      }
      <p  className={style.description}>How to prepare:</p>
      <p  className={style.description} style={{paddingLeft:40,paddingRight:40}}>{props.cocktail.instructions}</p>
    </div>
  </div>
  );
};

CocktailDetailItem.propTypes = {};

export default CocktailDetailItem;


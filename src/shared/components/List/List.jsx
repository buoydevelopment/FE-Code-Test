import React from "react";
import PropTypes from 'prop-types';
import './List.scss'

const List = (props) => {
  const { title, list, selectCocktail, shouldGetIngredients } = props;
  const Comp = props.comp;

  return(
    <div className="cocktailList_container container">
      <h1 className='title is-3 has-text-centered has-text-white has-text-weight-light'>{title}</h1>
      <div>
        {list.map((i) => <Comp key={i.idDrink} cocktail={i} onClick={selectCocktail} shouldGetIngredients={shouldGetIngredients} /> )}
      </div>
    </div>
  );
}

List.propTypes = {
  title: PropTypes.string,
  comp: PropTypes.any,
  list: PropTypes.array
}

List.defaultProps = {
  title: 'Random Drinks 0.1',
}

export default List;
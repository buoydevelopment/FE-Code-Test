import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

const ListItem = (props) => (
  <Link className="router-link" to={`/${props.item.idDrink}`}>
    <div className="list-item-wrapper">
      <div className="list-item">
        <div className="list-item__drink-detail">
          <h3>{props.item.idDrink}</h3>
          <p>{props.item.strDrink}</p>
        </div>
        <div className="list-item__thumbnail">
          <img src={props.item.strDrinkThumb} />
        </div>
      </div>
    </div>
  </Link>
);

ListItem.propTypes = {
  item: PropTypes.any
};

export default ListItem;

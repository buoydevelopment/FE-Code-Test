import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardDetails from './card-details';
import './drink-details.css';

const DrinkDetails = (props) => {
  const { name } = props;
  return <div>
    <div className="drink-details-header">
      <Link to="/">
        <img src={process.env.PUBLIC_URL+'/icons/left-arrow.svg'} alt="back"/>
      </Link>
      <h1>{name}</h1>
    </div>
    <CardDetails {...props}/>
  </div>
}

DrinkDetails.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  thumb: PropTypes.string,
  instructions: PropTypes.string,
  ingredients: PropTypes.array,
  measures: PropTypes.array,
}

export default DrinkDetails;
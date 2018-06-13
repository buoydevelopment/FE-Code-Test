import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import CardDetails from './card-details';

const DrinkDetails = (props) => {
  const { name } = props;
  return <div>
    <div>
      <Link to="/">Back</Link>
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
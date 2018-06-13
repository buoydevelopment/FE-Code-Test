import React from 'react';
import './card-details.css';
const CardDetails = (props) => {
  const { name, thumb, instructions, ingredients, measures} = props;

  return <div className="cardDetails">
    <img src={thumb} alt={name} className="thumbDetails"/>
    <ul>
    {
      measures.map((measure, index) => {
        return <li key={index}>{`${measure} - ${ingredients[index]}`}</li>
      })
    }
    </ul>
    <h3>How to prepare</h3>
    <span>{instructions}</span>
  </div>
}

export default CardDetails;
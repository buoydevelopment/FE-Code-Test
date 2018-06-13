import React from 'react';
import PropTypes from 'prop-types';

import './card.css';
import { withRouter } from 'react-router';

const Card = (props) => {
  const {title, thumb, id, history} = props;
  var thumbStyle = {
    background: `#ffffff url(${thumb})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const redirect = () => {
    history.push(`/${id}`);
  }
  
  return (<div className='card' onClick={redirect}>
    <div className='description'>
      <h2>{title}</h2>
    </div>
    <div className='thumb' style={thumbStyle}></div>
  </div>)
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
}

export default withRouter(Card);
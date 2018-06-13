import React from 'react';
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
      <h1>{title}</h1>
    </div>
    <div className='thumb' style={thumbStyle}></div>
  </div>)
}
export default withRouter(Card);
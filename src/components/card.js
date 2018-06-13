import React from 'react';
import './card.css';


const card = (props) => {
  const {title, thumb} = props;
  var thumbStyle = {
    background: `#ffffff url(${thumb})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  
  return (<div className='card'>
    <div className='description'>
      <h1>{title}</h1>
    </div>
    <div className='thumb' style={thumbStyle}></div>
  </div>)
}
export default card;
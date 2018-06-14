import React from 'react';
import './loader.css';

const Loader = () => {
  return <div className="loader">
    <img src={process.env.PUBLIC_URL+'/icons/loader.svg'} alt="loading"/>
  </div>;
}

export default Loader;
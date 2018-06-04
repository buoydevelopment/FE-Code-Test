import React, { Component } from 'react';
import Spinner from './Spinner';

const LoaderHOC = (listName) => (WrapperComponent) => {
  return class LoaderHOC extends Component {
    render() {
      return this.props[listName].length > 0 ? <WrapperComponent {...this.props} /> : <Spinner />;
    }
  }
};

export default LoaderHOC;

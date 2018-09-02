import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Catalogue extends Component {
  render() {
    const { drinks } = this.props;

    if (!drinks) return null;

    return drinks.map((d, index) => {
      return (
        <div key={index}>
          <Link to={`/${d.idDrink}`}>{`${d.idDrink}`}</Link>
        </div>
      );
    });
  }
}

export default Catalogue;

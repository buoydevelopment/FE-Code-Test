import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ServiceError from '../service-error';

class DrinkDetail extends Component {
  
  render() {
    const { loadingSelectedDrink } = this.props;

    return (
        <section>
          <Link to="/">Home</Link>
          {(loadingSelectedDrink) ? 'Loading...' : this.renderDetail()}
        </section>
    );
  }

  renderDetail() {
    const { selectedDrink, match, serviceError } = this.props;

    if (serviceError) return <ServiceError error={'Oops, there was an error.'} />;
    if (!selectedDrink) return null;

    return (
        <div>
            <h1>{match.params.drinkId}</h1>
            <p>{JSON.stringify(selectedDrink)}</p>
        </div>
    );
  }

  componentDidMount() {
    const { getDrink, match } = this.props;

    if (getDrink) getDrink(match.params.drinkId);
  }
}

export default DrinkDetail;

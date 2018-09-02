import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Catalogue from './components/catalogue';
import ServiceError from './components/service-error';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Drinks</h1>
        </header>
        {this.renderContent()}
      </div>
    );
  }

  renderContent() {
    const { serviceError } = this.props;

    return (serviceError)
      ? <ServiceError error={'Oops, there was an error.'} />
      : this.renderDrinks();
  }

  renderDrinks() {
    const { loadingDrinks } = this.props;

    return (
      <section>
          {(loadingDrinks) ? 'Loading...' : this.renderCatalogue()}
      </section>
    );
  }

  renderCatalogue() {
    const { drinks, filteredDrinks } = this.props;

    return (
      <section>
        <input type="text" onChange={this.onInputChange} />
        <Catalogue drinks={filteredDrinks || drinks} />
      </section>
    );
  }

  onInputChange = (e) => {
    const { filterDrinkByName } = this.props;

    filterDrinkByName(e.target.value);
  }

  componentDidMount() {
    const { getDrinks } = this.props;

    /*
      TODO: Use local storage or validate for `drinks` variable
      in the store before we do the filter service's call.
    */
    if (getDrinks) getDrinks('Cocktail_glass');
  }
}

export default App;

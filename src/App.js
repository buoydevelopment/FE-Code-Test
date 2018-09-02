import React, { Component } from 'react';
import {
  Section,
  Container,
  Box,
  Tile,
  Title,
  Columns,
  Column,
  Input
} from 'bloomer';
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

    // TODO: Split this render method into components.
    return (
      <Section>
        <Container>
        <Columns isCentered>
            <Column isSize='1/3'>
              <Tile isParent>
                <Tile isChild render={(props) => (
                  <Box {...props}>
                    <Title>Search</Title>
                    <Input type="text" placeholder='Drink Name' onChange={this.onInputChange} />
                  </Box>
                )} />
              </Tile>
            </Column>
            <Column>
              <Tile isParent>
                <Tile isChild render={(props) => (
                  <Box {...props}>
                    <Title>Drinks</Title>
                    {(loadingDrinks) ? 'Loading...' : this.renderCatalogue()}
                  </Box>
                )} />
              </Tile>
            </Column>
          </Columns>
        </Container>
      </Section>
    );
  }

  renderCatalogue() {
    const { drinks, filteredDrinks } = this.props;

    return (
      <section>
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

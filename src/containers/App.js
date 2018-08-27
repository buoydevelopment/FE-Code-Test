import React, { Component } from 'react';
import '../styles/App.css';
import {
  Route,
  HashRouter,
} from 'react-router-dom';

import CocktailsList from './CocktailsList';
import CocktailDetail from './CocktailDetail';
import WithCocktailData from '../context/WithCocktailData';
import { Col, Row } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Random drinks 0.1</h1>
        </header>
        <Row>
          <Col xs={12} md={4} mdOffset={4}>
            <HashRouter>
              <div className="content">
                <Route exact path="/cocktails/:drinkId" component={CocktailDetail}/>
                <Route exact path="/" component={WithCocktailData(CocktailsList)}/>
              </div>
            </HashRouter>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;

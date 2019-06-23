import React from 'react';
import logo from './logo.svg';
import Header from './components/Header.js'
import './App.css';
import CocktailList from "./components/CocktailList";
import LoadingOverlay from 'react-loading-overlay';
import Root from "./components/Root";
import Context from './Context';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class App extends React.Component {

  state = {
    title: 'Random Drinks 0.1',
    setTitle: (value) => {
      this.setState({title: value})
    },
    loading: false,
    setLoading: (value) => {
      this.setState({loading: value})
    }
  };

  render() {
    return (
    <Context.Provider value={this.state}>
      <Router>
        <Root/>
      </Router>
    </Context.Provider>
    );
  }

}

export default App;

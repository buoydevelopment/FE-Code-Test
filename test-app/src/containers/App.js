import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainView from './MainView';
import DetailView from './DetailView';
import SearchHeader from '../components/SearchHeader';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktails: [],
      searchFilter: '',
    };
  }
  
  componentDidMount() {
    if (this.state.cocktails.length === 0) {
      this.props.services.fetchCocktails()
        .then((list) => { this.setState({ cocktails: list }); });
    }
  }

  handleSearch = (value) => { this.setState((prevState, props) => ({ searchFilter: value })); };

  cancelSearch = () => { this.setState((prevState, props) => ({ searchFilter: '' })); };

  render() {
    const { services } = this.props;
    const { cocktails, searchFilter } = this.state;
    const filteredList = (searchFilter === '') ? cocktails : cocktails.filter((c) => { return c.strDrink.toLowerCase().includes(searchFilter.toLowerCase()); });
    
    return (
      <div className="app">
        <SearchHeader
          searchFilter={searchFilter}
          handleSearch={this.handleSearch}
          cancelSearch={this.cancelSearch}
        />
        <Router>
          <Switch>
            <Route exact path="/" render={(props) => (
              <MainView
                {...props}
                cocktails={filteredList}
                services={services}
                searchFilter={searchFilter}
                handleSearch={(value) => { this.handleSearch(value); }}
                cancelSearch={() => { this.cancelSearch(); }}
              />
            )}/>
            <Route path="/drinks/details/:id" render={(props) => (<DetailView {...props} services={services} />)} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

import List from '../../components/List';
import CocktailCard from '../../components/CocktailCard';
import LoadingIndicator from '../../components/LoadingIndicator';

import './style.scss';

export default class CocktailList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();

    this.state = {
      searchTerm: '',
    };

    this.handleSearchFilter = this.handleSearchFilter.bind(this);
  }

  componentDidMount() {
    if (!this.props.cocktailList) {
      this.props.loadCocktailList();
    }
  }

  handleSearchFilter(ev) {
    this.setState({
      searchTerm: ev.target.value,
    });

    console.log(this.state.searchTerm);
  }

  render() {
    const { loading, error, cocktailList } = this.props;

    return (
      <section>
        <Helmet>
          <title>Cocktail List</title>
          <meta name="description" content="" />
        </Helmet>
        <div className="cocktail-list">
          <div className="search-filter">
            <label htmlFor="searchTerm"> Filter: </label>
            <input
              id="searchTerm"
              type="text"
              placeholder=""
              value={this.state.searchTerm}
              onChange={this.handleSearchFilter}
            />
          </div>
          {
            loading && <LoadingIndicator />
          }
          {
            cocktailList && 
            <List items={cocktailList} component={CocktailCard} filter={this.state.searchTerm} />
          }
        </div>
      </section>
    );
  }
}

CocktailList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  cocktailList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  loadCocktailList: PropTypes.func,
};

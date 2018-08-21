import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

import List from '../../components/List';
import CocktailCard from '../../components/CocktailCard';
import LoadingIndicator from '../../components/LoadingIndicator';

import './style.scss';

export default class CocktailList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (!this.props.cocktailList) {
      this.props.loadCocktailList();
    }
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
          {
            loading && <LoadingIndicator />
          }
          {
            cocktailList && 
            <List items={cocktailList} component={CocktailCard} />
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

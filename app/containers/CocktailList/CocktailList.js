import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
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
      <article>
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
            <List items={cocktailList} component={ListItem} />
          }
        </div>
      </article>
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

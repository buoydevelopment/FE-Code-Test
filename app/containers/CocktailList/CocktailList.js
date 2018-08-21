import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import './style.scss';

export default class CocktailList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (!this.props.cocktails) {
      this.props.loadCocktails();
    }
  }

  render() {
    const { loading, error, cocktails } = this.props;

    return (
      <article>
        <Helmet>
          <title>Cocktail List</title>
          <meta name="description" content="" />
        </Helmet>
        <div className="cocktail-list">
          { cocktails && 
            <List items={cocktails} component={ListItem} />
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
  cocktails: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  loadCocktails: PropTypes.func,
};

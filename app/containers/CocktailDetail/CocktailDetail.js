import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import CocktailCardExt from '../../components/CocktailCardExt';
import LoadingIndicator from '../../components/LoadingIndicator';
import './style.scss';

export default class CocktailDetail extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadCocktailDetail(this.props.match.params.id);
  }

  render() {
    const { loading, error, cocktail } = this.props;

    return (
      <section>
        <Helmet>
          <title>Cocktail Detail</title>
          <meta name="description" content="" />
        </Helmet>
        <nav>
          <Link to="/">Back</Link>
        </nav>
        { loading && <LoadingIndicator /> }
        { cocktail && <CocktailCardExt item={cocktail} /> }
      </section>
    );
  }
}

CocktailDetail.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  cocktail: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  loadCocktailDetail: PropTypes.func,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import LoadingIndicator from '../../components/LoadingIndicator';
import './style.scss';

export default class CocktailDetail extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.loadCocktailDetail(this.props.match.params.id);
  }

  renderIngredients(cocktail) {
    if (!cocktail) {
      return null;
    }

    return [...Array(15).keys()].map(
      (index, key) => (
        cocktail[`strMeasure${index + 1}`] &&
        cocktail[`strMeasure${index + 1}`].trim() != '' &&
        <li key={key}>{cocktail[`strMeasure${index + 1}`]} - {cocktail[`strIngredient${index + 1}`]}</li>
      )
    );
  }

  render() {
    const { loading, error, cocktail } = this.props;

    return (
      <article>
        <Helmet>
          <title>Cocktail Detail</title>
          <meta name="description" content="" />
        </Helmet>
        <div>
          <Link to="/">Back</Link>
        </div>
        { loading && <LoadingIndicator /> }
        { cocktail &&
          <div className="cocktail-detail">
            <h3>{cocktail.strDrink}</h3>
            <div className="cocktail-detail__body">
              <div className="cocktail-detail__thumbnail">
                <img src={cocktail.strDrinkThumb} />
              </div>
              <ul className="cocktail-detail__ingredient-list">{ this.renderIngredients(cocktail) }</ul>
              <p><strong>How to prepare:</strong></p>
              <p>
                {cocktail.strInstructions}
              </p>
            </div>
          </div>
        }
      </article>
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

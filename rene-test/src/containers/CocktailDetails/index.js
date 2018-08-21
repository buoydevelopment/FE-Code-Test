import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Col, Card, Icon } from 'antd';
import { connect } from 'react-redux';
import cocktailActions from '../../redux/cocktail/actions';

const { Meta } = Card;
const colStyle = {
  padding: 20
};

const { getDetails } = cocktailActions;

const isNullOrEmpty = value =>  value === '' || value === '↵' || value === null;

class CocktailDetails extends Component {
  componentWillMount() {
    const { getDetails, match } = this.props;
    getDetails(match.params.id);
  }

  renderIngredients(cocktailSingle) {
    const strIngredients = [];
    for (let i=1; i<16; i++) {
      if (!isNullOrEmpty(cocktailSingle[`strIngredient${i}`])) 
        strIngredients.push(cocktailSingle[`strIngredient${i}`]);
    }
    return (
      <ul>
        {
          strIngredients.map((ingredient, key) => <li key={key}>{ingredient}</li>)
        }
      </ul>
    );
  }

  renderMeasures(cocktailSingle) {
    const strMeasures = [];
    for (let i=1; i<16; i++) {
      if (!isNullOrEmpty(cocktailSingle[`strMeasure${i}`])) {
        strMeasures.push(cocktailSingle[`strMeasure${i}`]);
      }
    }
    return (
      <ul>
        {
          strMeasures.map((measure, key) => <li key={key}>{measure}</li>)
        }
      </ul>
    );
  }

  render() {
    const { cocktailSingle } = this.props;
    const { strDrinkThumb, strDrink, strInstructions } = cocktailSingle || {};

    if (!strDrink)
      return <p>No details</p>;

    const strIngredients = this.renderIngredients(cocktailSingle);
    const strMeasures = this.renderMeasures(cocktailSingle);

    return (
      <Col lg={12} xs={24} style={colStyle}>
        <h2>{strDrink}</h2>
        <Card
          hoverable
          cover={<img alt="strDrinkThumb" src={strDrinkThumb} />}
          actions={[<Link to='/cocktails'><Icon type="arrow-left" /></Link>]}
        >
          <Meta title="Ingredients" description={strIngredients} />
          <Meta title="Measures" description={strMeasures} />
          <Meta title="How to prepare" description={strInstructions} />
        </Card>
      </Col>
    );
  }
}

CocktailDetails.propTypes = {
  cocktailSingle: PropTypes.object,
};

export default connect(
  state => ({
    cocktailSingle: state.Cocktail.cocktailSingle
  }),
  { getDetails }
)(CocktailDetails);
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

class CocktailDetails extends Component {
  componentWillMount() {
    const { getDetails, match } = this.props;
    getDetails(match.params.id);
  }

  render() {
    const { cocktailSingle } = this.props;
    const strDrinkThumb = cocktailSingle ? cocktailSingle.strDrinkThumb : '';
    const strDrink = cocktailSingle ? cocktailSingle.strDrink : '';
    const strInstructions = cocktailSingle ? cocktailSingle.strInstructions : '';

    return (
      <Col lg={12} xs={24} style={colStyle}>
        <Card
          hoverable
          cover={<img alt="strDrinkThumb" src={strDrinkThumb} />}
          actions={[<Link to='/cocktails'><Icon type="arrow-left" /></Link>]}
        >
          <Meta
            title={strDrink}
            description={strInstructions}
          />
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
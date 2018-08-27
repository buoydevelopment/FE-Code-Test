import React, { Component } from 'react';
import { Row, Col, } from 'react-bootstrap';

export default class CocktailListCard extends Component {
  render() {
    const { onSelectCocktail, cocktail, style } = this.props;
    const { idDrink, strDrink, strDrinkThumb, } = cocktail;
    return (
      <div style={style}>
        <div className="card-container" onClick={() => onSelectCocktail(idDrink)}>
          <Row>
            <Col xs={6}>
              <div className="description-container">
                <h1>{strDrink}</h1>
              </div>
            </Col>
            <Col xs={6}>
              <div className="image-container">
                <img src={strDrinkThumb} width={"100%"} height={"auto"} alt="logo" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

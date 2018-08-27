import React, { Component } from 'react';
import { Row, Col, Button, } from 'react-bootstrap';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const ingredientPrefix = "strIngredient"
const measurePrefix = "strMeasure"

export default class CocktailDetailCard extends Component {


  backToCocktails() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { cocktail } = this.props;
    const { strDrinkThumb, strInstructions, strDrink, } = cocktail;

    const ingredientAndMeasure = [];
    Object.keys(cocktail).forEach((key) => {
      if (key.includes(ingredientPrefix) && cocktail[key] && cocktail[key].trim() !== "") {
        const ingredientIndex = key.substring(ingredientPrefix.length);
        const measure = cocktail[`${measurePrefix}${ingredientIndex}`];
        ingredientAndMeasure.push(`${measure} - ${cocktail[key]}`);
      }
   });

   const ingredientText = ingredientAndMeasure.map((iandm, index) => 
     <h5 key={`ingredient-${index}`}>{iandm}</h5>
   );

    return (
      <div>
        <div className="header-content-detail">
          <Row>
            <Col xs={2}>
              <h1><Button onClick={this.backToCocktails.bind(this)}><FaLongArrowAltLeft/></Button></h1>
            </Col>
            <Col xs={10}>
              <h1 align="center">{strDrink}</h1>
            </Col>
          </Row>
        </div>
        <div className="card-container">
          <Row>
            <Col xs={12}>
              <div className="image-container">
                <img src={strDrinkThumb} width={"100%"} height={"auto"} alt="logo" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="description-container">
                <br/>
                {ingredientText}
                <br/>
                <ul><li><h5 align="left">How to prepare</h5></li></ul>
                <h5 align="left">{strInstructions}</h5>
              </div>
            </Col>
          </Row>   
        </div>
      </div>
    );
  }
}

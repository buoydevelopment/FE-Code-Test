import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap';

export default class Cocktails extends Component {
  render() {
    const { cocktail, back } = this.props
    return (
        <div>
            <Row>
                <Col className='title-card-list'>
                    {cocktail.strDrink}
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <img width='250px' src={cocktail.strDrinkThumb}></img>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    {
                    Array.from(Array(15).keys()).map(element => cocktail[`strIngredient${element+1}`] && cocktail[`strIngredient${element+1}`] !== '' ? <div>{cocktail[`strMeasure${element+1}`]} - {cocktail[`strIngredient${element+1}`]}</div> : null)
                    }
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                   <ul>
                        <li>How to prepare</li>
                   </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                      {cocktail.strInstructions} 
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                      <Button color="secondary" onClick={back}>Back</Button>
                </Col>
            </Row>
            <br/>
        </div>
    )
  }
}
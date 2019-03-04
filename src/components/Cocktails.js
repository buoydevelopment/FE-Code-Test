import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

export default class Cocktails extends Component {
  render() {
    const { element } = this.props
    return (
      <Card>
          <CardImg top width="100%" src={element.strDrinkThumb} />
          <CardBody>
            <CardTitle className='title-card-list'>{element.strDrink}</CardTitle>
          </CardBody>
      </Card>
    )
  }
}

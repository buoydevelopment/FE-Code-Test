import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Image,
  Title,
  Card,
  CardContent,
  Content,
  Media,
  MediaLeft,
  MediaContent
} from 'bloomer';

class Catalogue extends Component {
  render() {
    const { drinks } = this.props;

    if (!drinks) return null;

    return drinks.map(this.renderCard);
  }

  renderCard = (d, index) => {
    return (
      <Card key={index}>
        <CardContent>
            <Media>
                <MediaLeft>
                    <Image isSize='96x96' src={d.strDrinkThumb} />
                </MediaLeft>
                <MediaContent>
                    <Title isSize={4}><Link to={`/${d.idDrink}`}>{d.strDrink}</Link></Title>
                </MediaContent>
            </Media>
            <Content>
                <small>{`#${d.idDrink}`}</small>
            </Content>
        </CardContent>
      </Card>
    );
  }
}

export default Catalogue;

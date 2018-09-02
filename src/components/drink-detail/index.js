import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Section,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Image,
  Card,
  CardImage,
  CardContent,
  Content,
} from 'bloomer';
import ServiceError from '../service-error';
import utils from '../../utils';

class DrinkDetail extends Component {
  
  render() {
    const { loadingSelectedDrink } = this.props;

    // TODO: Create a Loading component.
    if (loadingSelectedDrink || loadingSelectedDrink === undefined) return 'Loading';

    return (
      <Section>
        <Container>
          {this.renderBreadcrumb()}
          {this.renderDetail()}
        </Container>
      </Section>
    );
  }

  renderBreadcrumb() {
    const { match, selectedDrink } = this.props;

    return (
      <Breadcrumb>
          <ul>
              <BreadcrumbItem><Link to="/">{`< Home`}</Link></BreadcrumbItem>
              <BreadcrumbItem isActive>
                <a>{selectedDrink.strDrink}</a>
              </BreadcrumbItem>
              <BreadcrumbItem isActive>
                <a><small>{`#${match.params.drinkId}`}</small></a>
              </BreadcrumbItem>
          </ul>
      </Breadcrumb>
    );
  }

  renderDetail() {
    const { selectedDrink, serviceError } = this.props;

    if (serviceError) return <ServiceError error={'Oops, there was an error.'} />;
    if (!selectedDrink) return null;

    return (
      <Card>
        <CardImage>
          <Image isRatio='4:3' src={selectedDrink.strDrinkThumb} />
        </CardImage>
        <CardContent>
          <Content>
            <h1>{selectedDrink.strDrink}</h1>
            {this.renderIngredients(selectedDrink)}
            <h4>{'Instructions:'}</h4>
            <p>{selectedDrink.strInstructions}</p>
          </Content>
        </CardContent>
      </Card>
    );
  }

  renderIngredients(selectedDrink) {
    const ingredients = utils.getIngredients(selectedDrink);

    return (
      <React.Fragment>
        <h4>{'Ingredients:'}</h4>
        <ul>
          {ingredients.map((ingredient, index) => {
            let i = index + 1;

            return (
              <li key={index}>
                {`${selectedDrink['strMeasure' + i]} - ${ingredient}`}
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }

  componentDidMount() {
    const { getDrink, match } = this.props;

    if (getDrink) getDrink(match.params.drinkId);
  }
}

export default DrinkDetail;

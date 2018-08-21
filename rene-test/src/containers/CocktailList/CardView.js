import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card } from 'antd';

const { Meta } = Card;
const colStyle = {
  paddingTop: 20
};

const CardView = props => (
  <Col lg={7} xs={22} style={colStyle}>
    <Card
      hoverable
      cover={<img alt="strDrinkThumb" src={props.data.strDrinkThumb} />}
    >
      <Meta
        title={props.data.strDrink}
      />
    </Card>
  </Col>
);

CardView.propTypes = {
  cocktailList: PropTypes.array,
};

export default CardView;

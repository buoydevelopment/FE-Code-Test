import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import CardView from './CardView';

const ListView = props => (
  <Row type="flex" justify="space-around">
    {
      props.list.map((single, index) => (
        <CardView data={single} key={index} />
      ))
    }
  </Row>
);

ListView.propTypes = {
  cocktailList: PropTypes.array,
};

export default ListView;

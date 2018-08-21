import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input } from 'antd';

const Search = Input.Search;
const searchBoxStyle = {
  marginTop: 20
};

const SearchBox = props => (
  <Row style={searchBoxStyle}>
    <Col lg={12} xs={22} offset={1}>
      <Search
        placeholder={props.placeHolder}
        onSearch={search => props.onSearch(search)}
        enterButton
      />
    </Col>
  </Row>
);

SearchBox.propTypes = {
  placeHolder: PropTypes.string,
  onSearch: PropTypes.func,
};

export default SearchBox;

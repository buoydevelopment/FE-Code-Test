import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input, Icon } from 'antd';

const Search = Input.Search;
const searchBoxStyle = {
  marginTop: 20
};

const SearchBox = props => (
  <Row style={searchBoxStyle}>
    <Col lg={12} xs={22} offset={1}>
      <Input
        placeholder={props.placeHolder}
        style={searchBoxStyle}
        suffix={<Icon type="search" className="certain-category-icon" />}
        onKeyDown={e => props.onSearch(e.target.value)}
      />
    </Col>
  </Row>
);

SearchBox.propTypes = {
  placeHolder: PropTypes.string,
  onSearch: PropTypes.func,
};

export default SearchBox;

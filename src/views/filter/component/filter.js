import { TextFilter } from 'react-text-filter';
import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.PureComponent {
  render() {
    return <header className="header">
      <TextFilter onFilter={this.props.onFilter}/>
    </header>;
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired
};

export default Filter;

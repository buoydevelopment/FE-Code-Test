import TextFilter from 'views/common/components/text-filter';
import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.PureComponent {
  render() {
    return <header className="header">
      <TextFilter onChange={this.props.onFilter} delay={500}/>
    </header>;
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired
};

export default Filter;

import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class TextFilter extends React.PureComponent {
  handleChange = (value) => {
    const { onChange } = this.props;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      onChange(value);
    }, this.props.delay);
  };

  render() {
    return <TextField onChange={evt => this.handleChange(evt.target.value)}/>;
  }
}

TextFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  delay: PropTypes.number
};

TextFilter.defaultProps = {
  delay: 1000
};

export default TextFilter;

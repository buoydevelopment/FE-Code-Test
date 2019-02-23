import React, { Component } from 'react';
import { TextInput, TouchableOpacity, Image, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import eyeIcon from '../../../assets/images/commons/eyeIcon/eyeIcon.png';
import Typography from '../typography/Typography';
import { responsiveSize } from '../../../utils/dimensions';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      passwordVisibility: false,
    };
  }

  togglePasswordVisibility = () => {
    this.setState(prevState => ({
      passwordVisibility: !prevState.passwordVisibility,
    }));
  };

  updateInputValue(value) {
    this.setState({ inputValue: value });
  }

  render() {
    const { inputValue, passwordVisibility } = this.state;
    const {
      autoCapitalize,
      style,
      placeholder,
      toggleVisibility,
      secureTextEntry,
      label,
      ...other
    } = this.props;
    return (
      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize={autoCapitalize}
          style={[styles.defaultInput, style, label ? { paddingTop: responsiveSize(16) } : null]}
          placeholder={placeholder}
          onChangeText={text => this.updateInputValue(text)}
          value={inputValue}
          secureTextEntry={passwordVisibility ? false : secureTextEntry}
          {...other}
        />
        {label ? (
          <Typography variant="inputLabel" color="black" style={styles.label}>
            {label}
          </Typography>
        ) : null}
        {toggleVisibility ? (
          <TouchableOpacity style={styles.eyeIcon} onPress={() => this.togglePasswordVisibility()}>
            <Image source={eyeIcon} />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

Input.propTypes = {
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  placeholder: PropTypes.string,
  autoCapitalize: PropTypes.string,
  toggleVisibility: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  label: PropTypes.string,
};

Input.defaultProps = {
  style: {},
  autoCapitalize: 'sentences',
  placeholder: '',
  toggleVisibility: false,
  secureTextEntry: false,
  label: null,
};

export default Input;

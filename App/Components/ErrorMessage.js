import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import styles from './Styles/ErrorMessageStyles'


class ErrorMessage extends Component {

  render () {
    const {message} = this.props;
    return (
      <View style={[styles.messageContainer, this.props.styles]}>
        <Text style={styles.text}>{message ? message : 'An error has occurred.'}</Text>
      </View>
    )
  }

  static propTypes = {
    message: PropTypes.string,
  };

}

export default ErrorMessage

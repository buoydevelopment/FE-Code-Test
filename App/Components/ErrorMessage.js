import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import ErrorMessageStyles from "./Styles/ErrorMessageStyles";

export const ErrorMessage = ({ message, styles }) => (
  <View style={[ErrorMessageStyles.messageContainer, styles]}>
    <Text style={ErrorMessageStyles.text}>{message}</Text>
  </View>
);

ErrorMessage.propTypes = {
  message: PropTypes.string,
  styles: PropTypes.object
};

ErrorMessage.defaultProps = {
  message: "An error has occurred.",
  styles: null
};

export default ErrorMessage;

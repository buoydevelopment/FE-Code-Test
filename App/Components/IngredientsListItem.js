import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styles from "./Styles/IngredientsListItemStyle";

export const IngredientsListItem = ({ name, measure }) => (
  <View style={styles.container}>
    <Text style={styles.text}>-{name}</Text>
    <Text style={styles.text}>{measure}</Text>
  </View>
);

IngredientsListItem.defaultProps = {
  name: "Missing Ingredient",
  measure: ""
};

IngredientsListItem.propTypes = {
  name: PropTypes.string,
  measure: PropTypes.string
};

export default IngredientsListItem;

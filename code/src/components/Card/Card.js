import React, { Component } from "react";
import { View } from "react-native";

const Card = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { with: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowOpacity: 0.1,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;

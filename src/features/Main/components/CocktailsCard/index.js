import React from "react";
import PropTypes from "prop-types";
import { Image, StyleSheet, Text, View } from "react-native";

const CocktailsCard = ({ item }) => (
  <View style={styles.container}>
    <View style={styles.flex}>
      <Text style={styles.title}>{item.strDrink}</Text>
    </View>
    <View style={styles.flex}>
      <Image source={{ uri: item.strDrinkThumb }} style={styles.image} />
    </View>
  </View>
);

CocktailsCard.propTypes = {
  item: PropTypes.shape({
    idDrink: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired
  }).isRequired
};

export default CocktailsCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 160,
    padding: 10,
    marginVertical: 10,
    borderRadius: 3,
    elevation: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3
  },
  flex: {
    flex: 1
  },
  image: {
    height: "100%",
    borderRadius: 3
  },
  title: {
    fontSize: 25
  }
});

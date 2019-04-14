import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import FastImage from "react-native-fast-image";
const CocktailDetail = ({ image, ingredients, instructions }) => (
  <ScrollView style={styles.cocktailContainer}>
    <View style={styles.imageContainer}>
      <FastImage
        style={styles.cocktailImage}
        source={{
          uri: image,
          priority: FastImage.priority.high
        }}
      />
    </View>
    <View style={styles.ingredientList}>
      {ingredients.map(item => {
        return (
          <Text style={styles.ingredientsText} key={item}>
            {item}
          </Text>
        );
      })}
    </View>
    <View>
      <Text style={styles.instructionsHeader}>{`• How to prepare`}</Text>
      <Text style={styles.instructionsText}>{instructions}</Text>
    </View>
  </ScrollView>
);
const styles = StyleSheet.create({
  cocktailContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "column",
    borderRadius: 5,
    height: 550
  },
  imageContainer: {
    height: 300,
    width: 350,
    margin: 5
  },
  cocktailImage: {
    width: 350,
    height: 300,
    padding: 5,
    borderRadius: 5
  },
  ingredientList: {
    flexDirection: "column"
  },
  ingredientsText: { fontSize: 20 },
  instructionsHeader: { fontSize: 22, marginTop: 10 },
  instructionsText: { fontSize: 20, marginTop: 10 }
});

export default CocktailDetail;

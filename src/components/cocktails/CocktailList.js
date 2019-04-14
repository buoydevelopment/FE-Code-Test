import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import Cocktail from "./Cocktail";

const Cocktails = ({ drinks, onSelectedDrink }) => {
  return (
    <View>
      <FlatList
        data={drinks}
        keyExtractor={item => item.idDrink}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onSelectedDrink(item.idDrink, item.strDrink)}
          >
            <Cocktail name={item.strDrink} image={item.strDrinkThumb} />
          </TouchableOpacity>
        )}
        initialNumToRender={10}
        ListEmptyComponent={
          <Text style={styles.container}>{`No results`}</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "#eee",
    fontSize: 30,
    textAlign: "center"
  }
});
export default Cocktails;

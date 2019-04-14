import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = text => {
    onSearch(text);
  };

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        onChangeText={handleInputChange}
        style={styles.txtInput}
        placeholder="Search Drinks"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    padding: 10
  },
  txtInput: {
    height: 40,
    fontSize: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 5
  }
});

export default SearchBar;

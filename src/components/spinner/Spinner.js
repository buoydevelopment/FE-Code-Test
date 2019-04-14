import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const Spinner = () => (
  <View style={styles.spinnerContainer}>
    <ActivityIndicator size={100} color="#eee" />
  </View>
);
const styles = StyleSheet.create({
  spinnerContainer: {
    justifyContent: "center",
    flex: 1
  }
});
export default Spinner;

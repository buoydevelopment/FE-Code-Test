import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { getCocktails } from "../../api/cocktails";
import Loader from "../../components/Loader";
import CocktailsCard from "./components/CocktailsCard";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktails: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    try {
      const cocktails = await getCocktails();
      this.setState({ cocktails, isLoading: false });
    } catch (err) {
      this.setState({ isLoading: false });
    }
  }

  cocktailsKeyExtractor(item) {
    return item.idDrink;
  }

  render() {
    const { cocktails, isLoading } = this.state;

    if (isLoading)
      return (
        <View style={styles.container}>
          <Loader />
        </View>
      );

    return (
      <View style={styles.container}>
        {cocktails.length ? (
          <FlatList
            style={styles.flatList}
            contentContainerStyle={styles.flatListContent}
            data={cocktails}
            renderItem={CocktailsCard}
            keyExtractor={this.cocktailsKeyExtractor}
          />
        ) : (
          <Text style={styles.text}>
            {"We couldn't find any cocktails.\nCome back later!"}
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b3ecff"
  },
  flatList: {
    width: "100%"
  },
  flatListContent: {
    padding: 20
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

import React, { Component } from "react";
import { StyleSheet, View, Alert, ActivityIndicator } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { fetchDrinks, fetchDrinkDetail, searchDrinks } from "../redux/actions";
import { getFilteredDrinks, getFetching } from "../redux/selectors";
import { CocktailList, SearchBar, Spinner } from "../components";

class Drinks extends Component {
  componentDidMount() {
    this.props.fetchDrinks();
  }

  onSearchDrinks = filter => {
    this.props.searchDrinks(filter);
  };
  getDrinkDetail = (id, cocktailName) => {
    try {
      this.props.fetchDrinkDetail(id);
    } catch (error) {
      Alert.alert(error);
    }
    Navigation.push(this.props.componentId, {
      component: {
        name: "drinkDetail",
        options: {
          topBar: {
            title: {
              text: cocktailName
            }
          }
        }
      }
    });
  };

  render() {
    const {
      props: { drinks, fetching },
      onSearchDrinks,
      getDrinkDetail
    } = this;

    return (
      <View style={styles.container}>
        <SearchBar onSearch={onSearchDrinks} />
        {fetching ? (
          <Spinner />
        ) : (
          <CocktailList drinks={drinks} onSelectedDrink={getDrinkDetail} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00acc5"
  }
});

const mapStateToProps = state => ({
  drinks: getFilteredDrinks(state),
  fetching: getFetching(state)
});

export default connect(
  mapStateToProps,
  { fetchDrinks, fetchDrinkDetail, searchDrinks }
)(Drinks);

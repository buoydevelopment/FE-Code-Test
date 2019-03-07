import React, { Component } from "react";
import {
  Image,
  ListView,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Actions } from "react-native-router-flux";
import Card from "../components/Card/Card";
import CardSection from "../components/CardSection/CardSection";
import DrinksDetail from "./DrinksDetail";

let REQUEST_URL =
  "http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass";

let arraySearch = [];
class Drinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: true,
      text: ""
    };
  }

  componentDidMount() {
    return fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState(
          {
            dataSource: this.state.dataSource.cloneWithRows(
              responseData.drinks
            ),
            loaded: false
          },
          function() {
            arraySearch = responseData.drinks;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  searchFilter(text) {
    const newData = arraySearch.filter(function(item) {
      const itemData = item.strDrink
        ? item.strDrink.toUpperCase()
        : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newData),
      text: text
    });
  }

  render() {
    if (this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.searchFilter(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Drinks"
        />
        <View style={styles.containerList}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderDrinks}
            renderHeader={this.renderHeader}
            enableEmptySections={true}
          />
        </View>
      </View>
    );
  }

  renderHeader() {
    return (
      <View>
        <Text style={styles.textHeader}> Random drinks 0.1</Text>
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "white", fontSize: 25 }}>Loading Drinks...</Text>
      </View>
    );
  }

  renderDrinks(item) {
    return (
      <Card>
        <TouchableOpacity
          onPress={() => Actions.DrinksDetail({ id: item.idDrink })}
        >
          <CardSection>
            <View style={styles.viewText}>
              <View style={{ width: 180, height: 180 }}>
                <Text style={styles.textStyleNom}>{item.strDrink}</Text>
              </View>
              <View style={styles.viewImage}>
                <Image
                  style={styles.imagenStyle}
                  source={{ uri: item.strDrinkThumb }}
                />
              </View>
            </View>
          </CardSection>
        </TouchableOpacity>
      </Card>
    );
  }
}

const styles = {
  imagenStyle: {
    height: 170,
    width: 150,
    borderRadius: 5,
    marginBottom: 10
  },
  textStyleNom: {
    fontSize: 30,
    color: "#616161",
    marginTop: 15,
    marginLeft: 10
  },
  viewText: {
    flex: 1,
    flexDirection: "row"
  },
  viewImage: {
    width: 180,
    height: 180,
    justifyContent: "flex-end",
    marginLeft: 25,
    marginTop: 10
  },
  container: {
    flex: 1,
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00bcd4"
  },
  containerSearch: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#00bcd4"
  },
  containerList: {
    backgroundColor: "#00bcd4"
  },
  textInputStyle: {
    height: 40,
    fontSize: 17,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF"
  },
  textHeader: {
    fontSize: 25,
    color: "white",
    marginTop: 5,
    textAlign: "center",
    marginBottom: 5
  }
};

export default Drinks;

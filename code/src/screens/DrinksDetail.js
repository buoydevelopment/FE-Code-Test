import React, { Component } from "react";
import {
  Image,
  ListView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import { Actions } from "react-native-router-flux";
import Card from "../components/Card/Card";
import CardSection from "../components/CardSection/CardSection";
import Drinks from "./Drinks";
import { Icon } from "native-base";
import _ from "lodash";

let { width, height } = Dimensions.get("window");

export default class DrinksDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: true
    };
  }

  componentDidMount() {
    let id = this.props.id;
    let REQUEST_URL2 = `http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

    return fetch(REQUEST_URL2)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.drinks),

          loaded: false
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "white", fontSize: 25 }}>
          Loading Drink Detail...
        </Text>
      </View>
    );
  }

  render() {
    if (this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View>
        <View style={styles.containerList}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderDetail}
            enableEmptySections={true}
          />
        </View>
      </View>
    );
  }

  renderDetail(item) {
    return (
      <View>
        <View style={styles.containerBack}>
          <TouchableOpacity onPress={() => Actions.Drinks()}>
            <View style={styles.simpleRow}>
              <Icon name={"arrow-back"} style={styles.iconStyle} />
              <Text style={styles.textHeader}>{item.strDrink}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {
            <Card>
              <CardSection>
                <View style={styles.simpleColumn}>
                  <View style={styles.viewTextHeader}>
                    <View style={styles.viewImage}>
                      <Image
                        style={styles.imagenStyle}
                        source={{ uri: item.strDrinkThumb }}
                      />
                    </View>
                    {item.strIngredient1 ? (
                      <Text style={styles.textStyleIngredient}>
                        {item.strMeasure1} - {item.strIngredient1}
                      </Text>
                    ) : null}
                    {item.strIngredient2 ? (
                      <Text style={styles.textStyleIngredient}>
                        {item.strMeasure2} - {item.strIngredient2}
                      </Text>
                    ) : null}
                    {item.strIngredient3 ? (
                      <Text style={styles.textStyleIngredient}>
                        {item.strMeasure3} - {item.strIngredient3}
                      </Text>
                    ) : null}
                    {item.strIngredient4 ? (
                      <Text style={styles.textStyleIngredient}>
                        {item.strMeasure4} - {item.strIngredient4}
                      </Text>
                    ) : null}
                    {item.strIngredient5 ? (
                      <Text style={styles.textStyleIngredient}>
                        {item.strMeasure5} - {item.strIngredient5}
                      </Text>
                    ) : null}
                    {item.strIngredient6 ? (
                      <Text style={styles.textStyleIngredient}>
                        {item.strMeasure6} - {item.strIngredient6}
                      </Text>
                    ) : null}
                    {item.strIngredient7 ? (
                      <Text style={styles.textStyleIngredient}>
                        {item.strMeasure7} - {item.strIngredient7}
                      </Text>
                    ) : null}
                    {item.strIngredient8 ? (
                      <Text style={styles.textStyleIngredient}>
                        {item.strMeasure8} - {item.strIngredient8}
                      </Text>
                    ) : null}
                    {item.strIngredient9 ? (
                      <Text style={styles.textStyleIngredient}>
                        {item.strMeasure9} - {item.strIngredient9}
                      </Text>
                    ) : null}
                    {item.strIngredient10 ? (
                      <Text style={styles.textStyleIngredient}>
                        {item.strMeasure10} - {item.strIngredient10}
                      </Text>
                    ) : null}
                    {item.strIngredient11 ? (
                      <Text style={styles.textStyleIngredient}>
                        {item.strMeasure11} - {item.strIngredient11}
                      </Text>
                    ) : null}
                    {item.strIngredient12 ? (
                      <Text style={styles.textStyleIngredient}>
                        {item.strMeasure12} - {item.strIngredient12}
                      </Text>
                    ) : null}
                    {item.strIngredient13 ? (
                      <Text style={styles.textStyleIngredient}>
                        {item.strMeasure13} - {item.strIngredient13}
                      </Text>
                    ) : null}
                    {item.strIngredient14 ? (
                      <Text style={styles.textStyleIngredient}>
                        {item.strMeasure14} - {item.strIngredient14}
                      </Text>
                    ) : null}
                    {item.strIngredient15 ? (
                      <Text style={styles.textStyleIngredient}>
                        {item.strMeasure15} - {item.strIngredient15}
                      </Text>
                    ) : null}
                    <View style={styles.simpleColumn}>
                      <Text style={styles.textPrepare}>• How to prepare</Text>
                      <Text style={styles.textStyleIngredient}>
                        {item.strInstructions}
                      </Text>
                    </View>
                  </View>
                </View>
              </CardSection>
            </Card>
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  imagenStyle: {
    height: 300,
    width: 350
  },
  container: {
    flex: 1,
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00bcd4"
  },
  viewTextHeader: {
    flex: 1,
    flexDirection: "column"
  },
  viewImage: {
    width: 300,
    height: 300,
    marginTop: 10,
    marginBottom: 20
  },
  textStyleIngredient: {
    fontSize: 20,
    color: "#616161",
    marginLeft: 10
  },
  textPrepare: {
    fontSize: 20,
    color: "#616161",
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 10
  },
  containerList: {
    backgroundColor: "#00bcd4"
  },
  simpleColumn: {
    display: "flex",
    flexDirection: "column"
  },
  simpleRow: {
    flexDirection: "row",
    alignItems: "center"
  },
  containerBack: {
    backgroundColor: "#00bcd4",
    display: "flex",
    flex: 1,
    textAlign: "left"
  },
  textHeader: {
    fontSize: 25,
    color: "white",
    marginTop: 20,
    marginLeft: 20
  },
  iconStyle: {
    color: "white",
    fontSize: 30,
    marginLeft: 10,
    marginTop: 20
  }
};


import React from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator, TouchableOpacity, FlatList } from "react-native";

export default class DrinksScreen extends React.Component {

  static navigationOptions = {
    title: 'Random Drinks',
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    }
  }

  componentDidMount() {

    const drinksUrl = 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass';

    return fetch(drinksUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({
          dataSource: data.drinks,
          isLoading: false,
        })
      })
      .catch((err) => {
        console.log(err)
      });
  }

  renderItem = ({ item }) => {

    return (
      <TouchableOpacity style={styles.item}
        onPress={() => {
          this.props.navigation.navigate('Drink', {
            drinkId: item.idDrink,
            drinkName: item.strDrink,
            drinkImage: item.strDrinkThumb
          })
        }}>

        <Image style={styles.image}
          source={{ uri: item.strDrinkThumb }} />
        <View style={styles.item_text_container}>
          <Text style={styles.item_title}>
            {item.strDrink}
          </Text>
        </View>

      </TouchableOpacity>
    )

  }

  render() {

    return (

      this.state.isLoading

        ?
        <View style={styles.screen_container}>
          <ActivityIndicator size="large" color='#330066' />
        </View>

        :

        <View style={styles.container}>
          <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
          />
        </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4EBCD1',
  },
  screen_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    flex: 1,
    flexDirection: 'row-reverse',
    backgroundColor: '#fff',
    margin: 10,
    padding: 14,
    borderRadius: 5
  },
  item_text_container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  item_title: {
    fontSize: 22,
    color: '#575757',
    fontWeight: '600'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5
  }
});
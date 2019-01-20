import React from 'react';
import { View, Image, StyleSheet, Text, ActivityIndicator, FlatList } from 'react-native';


export default class Drink extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.drinkName}`,
  })

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      isLoading: true
    }
  }

  componentDidMount() {
    const drinkId = this.props.navigation.state.params.drinkId;
    const drinkDetailUrl = `http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;

    return fetch(drinkDetailUrl)
      .then(response => response.json())
      .then(data => {
        const drink = this.getData(data, 'drinks')[0]
        this.setState({
          dataSource: drink,
          isLoading: false,
        })
      })
  }

  render() {

    const { navigation } = this.props;

    const drinkImage = navigation.getParam('drinkImage', 'None')

    return (
      this.state.isLoading
        ?
        <View style={styles.screen_container}>
          <ActivityIndicator size='large' color='#330066' />
        </View>

        :

        <View style={styles.container}>
          <View style={styles.item_container}>

            <Image style={styles.image}
              source={{ uri: drinkImage }} />
            <View style={[styles.item_ingredients, styles.text_container]}>
              <FlatList
                data={this.getIngredient(this.state.dataSource)}
                renderItem={({ item }) => <Text style={{ marginTop: 3, marginBottom: 3, fontSize: 16, color: '#9E9E9E' }}>{item.item}</Text>}
              />
            </View>


            <View style={[styles.item_instructions, , styles.text_container]}>
              <Text style={styles.text_default}>* How to prepare</Text>
              <Text style={styles.text_default}>{this.state.dataSource.strInstructions}</Text>
            </View>

          </View>
        </View>
    );
  }

  getIngredient = (obj) => {
    const count = [...Array(15).keys()].map(x => ++x);
    console.log(count)
    let ingredients = [];
    count.forEach(ele => {
      if (!obj[`strIngredient${ele}`]) {
        return;
      }
      ingredients.push({ item: `${obj[`strMeasure${ele}`]} - ${obj[`strIngredient${ele}`]}` })
    })
    return ingredients;
  }

  getData = (obj, property) => {
    if (!obj) return;
    return obj[property]
  }



}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 250,
    marginBottom: 5
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4EBCD1',
  },
  item_container: {
    flex: 1,
    marginBottom: 40,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'flex-start'
  },
  item_ingredients: {
    marginTop: 10,
    width: 300,
  },
  item_instructions: {
    marginTop: 15,
    width: 250,
  },
  text_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text_default: {
    fontSize: 16,
    color: '#9E9E9E'
  }
});

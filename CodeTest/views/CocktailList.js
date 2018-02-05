import React from 'react';

//import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity
} from 'react-native';

import CocktailCard from '../components/CocktailCard.js';

export default class CocktailList extends React.Component {
  state={
    drinks: [],
    search: "",
    pressedMagnifier: false
  };
  showOrHideSearch = () => {
    const currentState = this.state.pressedMagnifier;
    this.setState({ pressedMagnifier: !currentState });
  };
  componentWillMount(){
    fetch('http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
    .then(response => response.json())
    .then(data=> {
      data.drinks.forEach(element => element.key=element.idDrink)
      return this.setState({ ...data })
    })
    .catch(err => console.log(err))
  };
  handlePress = (id)=>{
    this.props.navigation.navigate('Detail',id)
  };
  render() {
    const condition = this.state.pressedMagnifier ? <TextInput style={s.searchInput} onChangeText={(text)=>{
          this.setState({search: text})}}/> : <Text style={s.titleText}>Random drinks 0.1</Text>

    return (
      <View style={s.container}>

        <View style={s.titleContainer}>
          <View style={s.textContainer}>
            {condition}
          </View>

          <TouchableOpacity onPress={this.showOrHideSearch} style={s.magnifierContainer}>
            <Image style={{ width: 24, height: 24, resizeMode: 'contain' }} source={require('../assets/search.png')} />  
          </TouchableOpacity>
        </View>

        <FlatList
          data={this.state.drinks.filter((drink) => drink.strDrink.includes(this.state.search) )}
          renderItem={({item}) =>  <CocktailCard onPress={this.handlePress} id={item.idDrink} key={item.idDrink} strDrink={item.strDrink} strDrinkThumb={item.strDrinkThumb} />}
        />
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4ebcd1'
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.9
  },
  magnifierContainer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 40
  },
  searchInput: {
    borderColor: 'white',
    borderWidth: 1,
    width: '80%',
    marginLeft: 40
  }
});

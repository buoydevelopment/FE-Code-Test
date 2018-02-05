import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import CocktailDetailCard from '../components/CocktailDetailCard.js';


export default class CocktailDetailView extends React.Component {
  state = {
    drink:null,
    isFetching: false
  };
  componentWillMount(){
    this.setState({isFetching:true});

    const idDrink = this.props.navigation.state.params;
    
    fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
    .then(response => response.json())
    .then(data => this.setState({drink: data.drinks[0], isFetching:false}))
    .catch(error => console.log(error));
  };
  render() {
    if(!this.state.isFetching){
      return (
        <View style={s.container}>

          <View style={s.detailTitleContainer}>
            <TouchableOpacity onPress={()=> this.props.navigation.goBack() } style={s.backButtonContainer}>
              <Image style={{ width: 24, height: 24, resizeMode: 'contain' }} source={require('../assets/back.png')} />  
            </TouchableOpacity>

            <View style={s.titleContainer}>
              <Text style={s.detailTitleText}>
                {this.state.drink.strDrink}
              </Text>
            </View>
          </View>
      
          <CocktailDetailCard {...this.state.drink} />

        </View>
      );
    } else return (<View style={s.loadingContainer}><Text>Loading...</Text></View>)
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4ebcd1'
  },
  detailTitleContainer: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
  },
  detailTitleText: {
    color: 'white',
    fontSize: 16
  },
  backButtonContainer: {
    flex: 0.3,
    paddingLeft: 5
  },
  titleContainer: {
    justifyContent: 'center',
    flex: 0.7
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

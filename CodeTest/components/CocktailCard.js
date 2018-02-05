import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class CocktailCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {strDrink, strDrinkThumb} = this.props

    return (
      <TouchableOpacity onPress={()=>{this.props.onPress(this.props.id)}}>
        <View style={s.container}>

          <View style={s.cardContainer}>
            <View style={s.titleContainer}>
              <Text style={s.titleText}>
                {strDrink}
              </Text>
            </View>

            <View style={s.imgContainer}>
                <Image style={s.img} source={{uri: `https://${strDrinkThumb}`}} /> 
            </View>
          </View>

        </View>
      </TouchableOpacity>
    );
  }
}

const s = StyleSheet.create({
  container: {
    //
  },
  cardContainer: {
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    elevation: 3,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 0
    },
    height: 180,
    borderRadius: 5,
    marginBottom: 20
  },
  titleContainer: {
    flex: 0.55,
    paddingLeft: 10,
    paddingTop: 10
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 27,
    color: '#616161'
  },
  imgContainer: {
    flex: 0.45,
    paddingTop: 15,
    paddingRight: 10,
    paddingLeft: 5,
    paddingBottom: 15
  },
  img: {
    resizeMode: 'cover',
    width: '100%',
    height: 175,
    flex: 1,
    borderRadius: 5,
    overflow: 'hidden'
  }
});

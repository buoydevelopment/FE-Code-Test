import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const IMG_LOADING_DRINK = require('../assets/loading_drink.gif');

class Drink extends Component {

  onDrinkPress() {
    Actions.push('cocktailDetails', { drinkId: this.props.drink.idDrink });
  }

  render() {
    const { strDrink, strDrinkThumb, idDrink } = this.props.drink;
    const { titleStyle, imageStyle, cardStyle, descriptionStyle } = styles;
    const img = 'https://' + this.props.drink.strDrinkThumb;

    return (
      <TouchableOpacity onPress={this.onDrinkPress.bind(this)}>
        <View style={cardStyle}>
          <View style={descriptionStyle}>
            <Text style={titleStyle}>{strDrink}</Text>
            <Text style={{ fontSize: 15 }}>{idDrink}</Text>
          </View>
          <Image style={imageStyle}
            defaultSource={IMG_LOADING_DRINK}
            prefetch={{ uri: img }}
            source={{ uri: img }} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000'
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 5
  },
  cardStyle: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  descriptionStyle: {
    flexDirection: 'column',
    flex: 1
  }
};

export default Drink;
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Cocktailitem extends Component {
  constructor(props) {
    super(props);
  }

  onDrinkPress() {
    Actions.push('cocktailDetails', { cocktailId: this.props.drink.idDrink });
  }

  render() {
    const { strDrink, strDrinkThumb, idDrink } = this.props.drink;
    const { titleStyle, imageStyle, cardStyle, descriptionStyle } = styles;
    return (
      <TouchableOpacity onPress={this.onDrinkPress.bind(this)}>
        <View style={cardStyle}>
          <View style={descriptionStyle}>
            <Text style={titleStyle}>{strDrink}</Text>
          </View>
          <Image style={imageStyle}
            prefetch={{ uri: strDrinkThumb }}
            source={{ uri: strDrinkThumb }} />
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
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class CocktailDetailCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const {strInstructions, strDrinkThumb } = this.props
    
    return (
      <View style={s.container}>

        <View style={s.cocktailDetail}>

          <View style={s.imgContainer}>
            <Image style={s.img} source={{uri: `https://${strDrinkThumb}`}} />             
          </View>

          <View style={s.textContainer}>
            {Object.keys(this.props).map((key, index) => key.includes('strIngredient') && this.props[key] ?  <Text key={index} style={s.text}>{this.props[`strMeasure${key[key.length-1]}`]} - {this.props[key]} </Text> : null
            )}
          </View>

          <View style={s.textContainer}>
            <Text style={s.text}>
              &#8226; How to prepare
            </Text>
          </View>

          <View style={[s.textContainer, {marginBottom: 20}]}>
            <Text style={s.text}>
              {strInstructions}
            </Text>
          </View>

        </View>

      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  cocktailDetail: {
    backgroundColor: 'white',
    elevation: 3,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 0
    },
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20
  },
  imgContainer: {
    height: 300,
    paddingTop: 20
  },
  img: {
    resizeMode: 'contain',
    width: '100%',
    height: 250,
    flex: 1,
    overflow: 'hidden'
  },
  textContainer: {
    marginLeft: 20,
    marginTop: 10,
    marginRight: 20
  },
  text: {
    color: '#616161',
    fontFamily: 'Cochin',
    fontSize: 13
  }
});

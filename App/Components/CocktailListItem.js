import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import styles from './Styles/CocktailListItemStyles'



class CocktailListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      imageError: false,
    };
  }

  _onError = () =>{
    this.setState({imageError:true})
  };

  _onPress = () => {
    this.props.onPressItem(this.props.idDrink)
  };

  render () {
    const {text, imageSource} = this.props;
    const imageThumbnail = this.state.imageError ? require('../Images/Icons/cocktail.jpg'): {uri: imageSource};

    return (
      <TouchableOpacity
        onPress={this._onPress}
      >
        <View style={[styles.button, this.props.styles]}>
          <Text style={styles.text}>{text}</Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={imageThumbnail}
              resizeMethod="resize"
              onError={this._onError}
            />
          </View>
        </View>
      </TouchableOpacity>
    )

  }

  static propTypes = {
    text: PropTypes.string,
    onPressItem: PropTypes.func,
    imageSource: PropTypes.string
  };

}

export default CocktailListItem

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CocktailListItemStyles from "./Styles/CocktailListItemStyles";

const imageSrcDefault = require("../Images/Icons/cocktail.jpg");

class CocktailListItem extends Component {
  static defaultProps = {
    idDrink: "",
    text: "",
    onPressItem: null,
    imageSource: "",
    styles: null
  };

  static propTypes = {
    idDrink: PropTypes.string,
    text: PropTypes.string,
    onPressItem: PropTypes.func,
    imageSource: PropTypes.string,
    styles: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      imageError: false
    };
  }

  onError = () => {
    this.setState({ imageError: true });
  };

  onPress = () => {
    const { idDrink, onPressItem } = this.props;
    onPressItem(idDrink);
  };

  render() {
    const { imageSource, styles, text } = this.props;
    const { imageError } = this.state;
    const imageThumbnail = imageError ? imageSrcDefault : { uri: imageSource };
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={[CocktailListItemStyles.button, styles]}>
          <Text style={CocktailListItemStyles.text}>{text}</Text>
          <View style={CocktailListItemStyles.imageContainer}>
            <Image
              style={CocktailListItemStyles.image}
              source={imageThumbnail}
              resizeMethod="resize"
              onError={this.onError}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default CocktailListItem;

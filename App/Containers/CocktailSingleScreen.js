import React, { Component } from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View
} from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CocktailSingleActions from "../Redux/CocktailSingleRedux";
import Header from "../Components/Header";
import { IngredientsListItem } from "../Components/IngredientsListItem";
import { Icons, Metrics } from "../Themes";
import styles from "./Styles/CocktailSingleScreenStyle";

const imageDefaultSrc = require("../Images/Icons/cocktail.jpg");

class CocktailSingleScreen extends Component {
  static defaultProps = {
    cocktail: {
      strDrinkThumb: imageDefaultSrc,
      strDrink: "Missing Cocktail Name",
      strInstructions: "Missing Cocktail instructions"
    },
    cocktailIngredients: []
  };

  static propTypes = {
    cocktail: PropTypes.object,
    cocktailIngredients: PropTypes.array,
    cocktailRequest: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      imageError: false
    };
  }

  componentDidMount() {
    const { cocktailRequest, navigation } = this.props;
    cocktailRequest(navigation.state.params.idDrink);
  }

  renderRow = ({ item }) => (
    <IngredientsListItem
      name={item.name}
      measure={item.measure}
      style={styles.row}
    />
  );

  renderHeader = () => (
    <Text style={[styles.label, styles.sectionHeader]}> - Ingredients - </Text>
  );

  renderEmpty = () => (
    <Text style={styles.label}> - Missing ingredients - </Text>
  );

  keyExtractor = item => `${item.idDrink}`;

  itemLayout = (data, index) => ({
    length: Metrics.listItemIngredientsHeight,
    offset: Metrics.listItemIngredientsHeight * index,
    index
  });

  onError = () => {
    this.setState({ imageError: true });
  };

  onPressLeftButton = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { cocktail, cocktailIngredients } = this.props;
    const { imageError } = this.state;
    const imageThumbnail =
      imageError || cocktail == null
        ? imageDefaultSrc
        : { uri: cocktail.strDrinkThumb };

    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.hero}>
            <Header
              title={cocktail ? cocktail.strDrink : "Missing Cocktail Name"}
              leftButtonIcon={Icons.backIcon}
              onPressLeftButton={this.onPressLeftButton}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0
              }}
            />
            <Image
              style={styles.cocktailImage}
              source={imageThumbnail}
              resizeMethod="resize"
              onError={this.onError}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.sectionTitle}> INGREDIENTS </Text>
            <FlatList
              contentContainerStyle={styles.listContent}
              data={cocktailIngredients}
              renderItem={this.renderRow}
              keyExtractor={this.keyExtractor}
              ListHeaderComponent={this.renderHeader}
              ListEmptyComponent={this.renderEmpty}
              itemLayout={this.itemLayout}
              removeClippedSubviews
            />
            <Text style={styles.sectionTitle}> HOW TO PREPARE </Text>
            <View style={styles.listContent}>
              <Text>
                {cocktail
                  ? cocktail.strInstructions
                  : "Missing Cocktail instructions"}
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  cocktail: state.cocktailSingle.cocktail,
  cocktailError: state.cocktailSingle.cocktailError,
  cocktailLoading: state.cocktailSingle.cocktailLoading,
  cocktailIngredients: state.cocktailSingle.cocktailIngredients
});

const mapDispatchToProps = dispatch => ({
  cocktailRequest: cocktailId =>
    dispatch(CocktailSingleActions.cocktailRequest(cocktailId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CocktailSingleScreen);

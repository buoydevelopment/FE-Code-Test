import React, { Component } from 'react'
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from 'react-native'
import { connect } from 'react-redux';
import CocktailSingleActions from '../Redux/CocktailSingleRedux';
import Header from '../Components/Header';
import IngredientsListItem from '../Components/IngredientsListItem';
import { Icons,Metrics  } from '../Themes';


// Styles
import styles from './Styles/CocktailSingleScreenStyle'

class CocktailSingleScreen extends Component {


  constructor(props) {
    super(props);

    this.state = {
      imageError: false,
    };
  }


  renderRow = ({item}) => {
    return (
      <IngredientsListItem
        name={item.name}
        measure={item.measure}
        style={styles.row}
      />
    )
  };

  // Render a header
  renderHeader = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Ingredients - </Text>;

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> - Missing ingredients - </Text>;

  keyExtractor = (item, index) => `${item.idDrink}`;

  itemLayout = (data, index) => (
    {length: Metrics.listItemIngredientsHeight, offset: Metrics.listItemIngredientsHeight * index, index}
  );

  _onError = () =>{
    this.setState({imageError:true})
  };

  _onPressLeftButton = () =>{
    this.props.navigation.goBack()
  };

  render () {
    const { cocktail } = this.props;
    const imageThumbnail = this.state.imageError || cocktail == null ? require('../Images/Icons/cocktail.jpg'): {uri: cocktail.strDrinkThumb};

    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <View style={styles.hero}>
            <Header
              title={cocktail ? cocktail.strDrink : 'Missing Cocktail Name'}
              leftButtonIcon={ Icons.backIcon }
              onPressLeftButton={this._onPressLeftButton}
              style={{position:'absolute',top:0,left:0,right:0}}
            />
            <Image
              style={styles.cocktailImage}
              source={imageThumbnail}
              resizeMethod="resize"
              onError={this._onError}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.sectionTitle}> INGREDIENTS </Text>

            <FlatList
              contentContainerStyle={styles.listContent}
              data={this.props.cocktailIngredients ? this.props.cocktailIngredients : []}
              renderItem={this.renderRow}
              keyExtractor={this.keyExtractor}
              ListHeaderComponent={this.renderHeader}
              ListEmptyComponent={this.renderEmpty}
              itemLayout={this.itemLayout}
              removeClippedSubviews={true}
            />
            <Text style={styles.sectionTitle}> HOW TO PREPARE </Text>
            <View style={styles.listContent}>
              <Text>
                {cocktail ? cocktail.strInstructions : 'Missing Cocktail instructions'}
              </Text>
            </View>

          </View>

        </KeyboardAvoidingView>
      </ScrollView>
    )
  }

  componentDidMount(){
    this.props.cocktailRequest(this.props.navigation.state.params.idDrink);
  }

}

const mapStateToProps = (state) => {
  return {
    cocktail : state.cocktailSingle.cocktail,
    cocktailError : state.cocktailSingle.cocktailError,
    cocktailLoading : state.cocktailSingle.cocktailLoading,
    cocktailIngredients : state.cocktailSingle.cocktailIngredients,

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    cocktailRequest: (cocktailId) => dispatch(CocktailSingleActions.cocktailRequest(cocktailId)),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(CocktailSingleScreen)

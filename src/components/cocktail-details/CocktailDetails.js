import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Ingredients from './Ingredients';
import Icon from 'react-native-vector-icons/Entypo'
import Header from '../common/Header';
import Spinner from '../common/Spinner';
import { getCocktailDetails } from '../../actions';

const cocktailDetailsDrink = 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

class CocktailDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCocktailDetails(this.props.cocktailId);
  }

  getIngredients(details) {
    let ingredients = []
    for (let i = 1; !!details['strIngredient' + i]; i++) {
      ingredients.push({
        ingredient: details['strIngredient' + i],
        measure: details['strMeasure' + i]
      });
    }
    return ingredients
  }

  render() {
    const {strDrink, strDrinkThumb, strInstructions} = this.props.cocktailDetails;
    const {titleStyles, imageStyles, cardStyles, descriptionStyles} = styles;
    return (
      <View style={{ flex: 1, backgroundColor: '#00c0d4'}}>
        <Header title={this.props.loading ? 'Loading..' : strDrink} showBack />
        {
          this.props.loading ?
            <Spinner /> :
            <ScrollView style={{ padding: 20 }} >
              <View style={cardStyles}>
                <Image prefetch={{ uri: strDrinkThumb }} source={{ uri: strDrinkThumb }} resizeMode='contain' style={imageStyles} />
                <Ingredients ingredients={this.getIngredients(this.props.cocktailDetails)} style={imageStyles}></Ingredients>
                <View style={{ marginVertical: 10, flexDirection: 'row' }}>
                  <Icon name='dot-single' size={10} style={{ alignSelf: 'center' }} />
                  <Text>How to Prepare</Text>
                </View>
                <Text style={descriptionStyles}>{strInstructions}</Text>
              </View>
            </ScrollView>
        }
      </View>
    );
  }
};

const styles = {
  titleStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000'
  },
  imageStyles: {
    height: 300,
    borderRadius: 5,
    marginBottom: 10
  },
  cardStyles: {
    borderRadius: 5,
    backgroundColor: '#fff',
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
    padding: 10,
  },
  descriptionStyles: {
    flexDirection: 'column',
    flex: 1,
    marginBottom: 10,
    paddingBottom: 20
  }
};

const mapStateToProps = ({appReducer, cocktailsReducer }) => {
  return {
    loading: appReducer.loading,
    cocktailDetails: cocktailsReducer.cocktailDetails
  };
};

export default connect(mapStateToProps, { getCocktailDetails })(CocktailDetails);

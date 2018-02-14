import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DrinkActions } from "../../store/actions/index";
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

class DrinkDetails extends Component {
  static navigationOptions = {
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: '#4ebcd1' },
  }

  constructor(props) {
    super();
    this.state = {
      details: {},
      ingredients: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.drinksState.drinkDetails && nextProps.drinksState.drinkDetails.drinks &&
      nextProps.drinksState.drinkDetails.drinks.length) {
      let obj = nextProps.drinksState.drinkDetails.drinks[0];

      let temp = Object.keys(obj).filter(str => str.indexOf('strIngredient') !== -1 || str.indexOf('strMeasure') !== -1).map(receipe => {
        if (receipe.indexOf('strIngredient') !== -1) {
          let thenum = receipe.match(/\d+/)[0];
          if (obj[receipe]) {
            return {
              name: obj[receipe],
              amount: obj['strMeasure' + thenum]
            };
          } else {
            return null;
          }
        }
        return null;
      }).filter(e => e)

      this.setState({ details: obj, ingredients: temp })
    }
  }

  componentWillMount() {
    this.props.getDrinkDetails(this.props.navigation.state.params.id);
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        {
          this.state.details.idDrink &&
          <View style={styles.imageView}>
            <Image
              source={{ uri: `https://${this.state.details.strDrinkThumb}` }}
              style={styles.imageStyle} />
            {
              this.state.ingredients &&
              this.state.ingredients.map((d, ind) => {
                return (
                  <View key={ind}>
                    <Text>{d.amount + " - " + d.name}</Text>
                  </View>
                )
              })
            }
            <Text style={styles.textStyle}>* How to prepare</Text>

            <Text>{this.state.details.strInstructions}</Text>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    paddingLeft: 15,
    paddingRight: 15
  },
  imageView: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 15
  },
  imageStyle: { 
    height: 150,
    width: "100%",
    marginBottom: 20 
  },
  textStyle: { 
    marginTop: 15,
    marginBottom: 8
   }
});

const mapStateToProps = (state) => {
  return { drinksState: state.DrinksReducer };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDrinkDetails: (id) => dispatch(DrinkActions.getDrinkDetails(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkDetails);
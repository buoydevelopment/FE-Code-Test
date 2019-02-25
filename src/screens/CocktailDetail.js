/* eslint-disable react/prop-types */
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';
import { Navigation } from 'react-native-navigation';
import colors from '../theme/Colors';
import { responsiveSize } from '../utils/dimensions';
// import Cocktail from '../entities/Cocktail';
import Typography from '../components/common/typography/Typography';
import { goBack } from '.';
import PlaceHolderImage from '../components/common/placeholder-image/PlaceHolderImage';
import Spacing from '../components/common/spacing/Spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlueBackgroung,
  },
  textTitle: {
    color: colors.black,
    marginLeft: responsiveSize(15),
    marginRight: responsiveSize(15),
  },
  image: {
    width: responsiveSize(300),
    height: responsiveSize(230),
    borderRadius: responsiveSize(5),
    borderWidth: 0.3,
    borderColor: colors.opacityBackground,
  },
  card: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: responsiveSize(10),
    marginTop: responsiveSize(20),
    flex: 0.95,
    marginLeft: responsiveSize(15),
    marginRight: responsiveSize(15),
    shadowColor: colors.opacityBackground,
    shadowOffset: {
      width: 2,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

class CocktailDetail extends React.Component {
  static options(passProps) {
    return {
      topBar: {
        buttonColor: 'black',
        hideOnScroll: false,
        title: {
          text: passProps.drink,
          color: 'white',
        },
        background: {
          color: colors.lightBlueBackgroung,
        },
        leftButtons: [
          {
            id: 'back',
            text: 'back',
            color: 'white',
          },
        ],
        rightButtons: [],
      },
    };
  }

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
  }

  navigationButtonPressed({ buttonId }) {
    // will be called when "buttonOne" is clicked

    if (buttonId === 'back') {
      const { componentId } = this.props;

      goBack(componentId);
    }
  }

  render() {
    const { cocktail } = this.props;

    const ingredientsArr = [];
    let indexIngredient = 'ingredient';

    Array(15)
      .fill()
      .map((_, i) => ingredientsArr.push(cocktail[indexIngredient + (i + 1)]));

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Spacing size="large" />
          <PlaceHolderImage
            resize="cover"
            style={styles.image}
            source={{ uri: cocktail.strDrinkThumb }}
          />
          <Spacing size="large" />
          <Typography variant="bodyTitleRegular" color="black" style={styles.textTitle}>
            Ingredients
          </Typography>
          <Spacing size="tiny" />
          {ingredientsArr
            .filter(item => item != null)
            .filter(item => item.length > 0)
            .map(item => {
              return (
                <Typography key={item} variant="midBody" color="black">
                  {item}
                </Typography>
              );
            })}
          <Spacing size="medium" />
          <Typography variant="bodyTitleRegular" color="black" style={styles.textTitle}>
            Instructions
          </Typography>
          <Spacing size="tiny" />
          <Typography variant="midBody" color="black" style={styles.textTitle}>
            {cocktail.instructions}
          </Typography>
        </View>
      </SafeAreaView>
    );
  }
}

/* CocktailDetail.propTypes = {
	item: PropTypes.instanceOf( Cocktail ).isRequired
}; */

const mapStateToProps = state => ({
  cocktail: state.cocktails.cocktail,
});

export default compose(
  connect(
    mapStateToProps,
    null
  )(CocktailDetail)
);

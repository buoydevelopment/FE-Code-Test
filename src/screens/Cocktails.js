/* eslint-disable react/prop-types */
import React from 'react';
import { View, FlatList, StyleSheet, SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import colors from '../theme/Colors';
import { responsiveSize } from '../utils/dimensions';
import CocktailBox from '../components/cocktails/cocktail-box/CocktailBox';
import Cocktail from '../entities/Cocktail';
import Typography from '../components/common/typography/Typography';
import { fetchCocktails, fetchCocktailById } from '../actions/cocktails';
import { goToPage } from './index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlueBackgroung,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cocktailList: {
    marginTop: responsiveSize(10),
  },
  textTitle: {
    marginTop: responsiveSize(30),
    color: colors.white,
  },
});

const title = 'Ramdom Drinks 0.1';

class Cocktails extends React.Component {
  static options() {
    return {
      topBar: { visible: false },
    };
  }

  componentDidMount() {
    const { fetchCocktailsConnect } = this.props;
    fetchCocktailsConnect(this.callBackSuccess, this.callBackError);
  }

  callBackSuccess = () => {};

  callBackError = error => {
    Alert.alert(error);
  };

  onDrinkPress = drink => {
    const { componentId, fetchCocktailsByIdConnect } = this.props;

    fetchCocktailsByIdConnect(
      drink.idDrink,
      () => goToPage(componentId, 'cocktailDetail', { drink: drink.strDrink }),
      this.callBackError
    );
  };

  _renderItem(item) {
    return (
      <CocktailBox
        item={Cocktail.fromJSON(item)}
        onDrinkPress={drink => this.onDrinkPress(drink)}
      />
    );
  }

  render() {
    const { cocktails, isFetching } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        {isFetching ? (
          <ActivityIndicator style={{ alignSelf: 'center' }} size="large" color={colors.white} />
        ) : (
          <View>
            <Typography variant="bodyTitle" color="black" style={styles.textTitle}>
              {title}
            </Typography>
            <FlatList
              style={styles.cocktailList}
              keyExtractor={(item, index) => index.toString()}
              data={cocktails}
              renderItem={({ item }) => this._renderItem(item)}
              showsHorizontalScrollIndicator={false}
              initialNumToRender={10}
              maxToRenderPerBatch={20}
              windowSize={20}
              removeClippedSubviews
            />
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  cocktails: state.cocktails.cocktails,
  isFetching: state.cocktails.isFetching,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCocktailsConnect: fetchCocktails,
      fetchCocktailsByIdConnect: fetchCocktailById,
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cocktails)
);

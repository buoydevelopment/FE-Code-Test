import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, View } from 'react-native';
import PropTypes from 'prop-types';
import { loadCocktailDetail } from './actions';
import CocktailDetailCard from './components/CocktailDetailCard';
import styles from './CocktailDetailStyles';
import Header from '../../commons/Header';

class CocktailDetailScreen extends React.Component {
  componentDidMount() {
    const { requestCocktailDetail, navigation } = this.props;
    requestCocktailDetail(navigation.state.params.id);
  }

  onLeftButtonPress = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { drink, loading, error } = this.props;
    return (
      <View style={styles.detailStyles}>
        <Header
          leftButtonIcon="arrow-left"
          onLeftButtonPress={this.onLeftButtonPress}
          title="Cocktail Detail"
        />
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <CocktailDetailCard cocktail={drink} error={error} />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  drink: state.cocktailDetailReducer.drink,
  error: state.cocktailDetailReducer.loadingDrinkError,
  loading: state.cocktailDetailReducer.loadingDrink,
});

const mapDispatchToProps = dispatch => {
  return {
    requestCocktailDetail: cocktailId => {
      dispatch(loadCocktailDetail(cocktailId));
    },
  };
};

CocktailDetailScreen.propTypes = {
  requestCocktailDetail: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  drink: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    instructions: PropTypes.string,
    ingredients: PropTypes.array,
  }),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

CocktailDetailScreen.defaultProps = {
  drink: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CocktailDetailScreen);

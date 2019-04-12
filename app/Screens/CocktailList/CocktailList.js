import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, FlatList, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { loadCocktailList, filterCocktailList } from './actions';
import CocktailListCard from './components/CocktailListCard';
import Header from '../../commons/Header';
import SearchBar from './components/SearchBar';
import styles from './CocktailListStyles';

class CocktailListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
  }

  componentDidMount() {
    const { requestCocktailList } = this.props;
    requestCocktailList();
  }

  onCocktailPress = id => {
    const { navigation } = this.props;
    navigation.navigate('CocktailDetail', { id });
  };

  onChangeText = text => {
    const { cocktailList, filterCocktails } = this.props;
    this.setState({ searchText: text });
    const filteredList = cocktailList.filter(cocktail => {
      return cocktail.strDrink.includes(text);
    });
    filterCocktails(filteredList);
  };

  keyExtractor = item => item.idDrink;

  render() {
    const { searchList, loading } = this.props;
    const { searchText } = this.state;
    return (
      <View style={styles.listStyles}>
        <Header title="Cocktail List" />
        <SearchBar searchText={searchText} onChangeText={this.onChangeText} />
        {loading ? (
          <ActivityIndicator size="large" style={styles.loadingIndicator} />
        ) : (
          <FlatList
            data={searchList}
            extraData={searchList}
            renderItem={item => (
              <CocktailListCard item={item} onCocktailPress={this.onCocktailPress} />
            )}
            keyExtractor={this.keyExtractor}
            initialNumToRender={10}
            ListEmptyComponent={<Text>Ups, the list is empty.</Text>}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cocktailList: state.cocktailListReducer.cocktailList,
  searchList: state.cocktailListReducer.searchList,
  loading: state.cocktailListReducer.loadingCocktailList,
});

const mapDispatchToProps = dispatch => {
  return {
    requestCocktailList: () => {
      dispatch(loadCocktailList());
    },
    filterCocktails: cocktailList => {
      dispatch(filterCocktailList(cocktailList));
    },
  };
};

CocktailListScreen.propTypes = {
  cocktailList: PropTypes.arrayOf(
    PropTypes.shape({
      strDrink: PropTypes.string,
      strDrinkThumb: PropTypes.string,
      idDrink: PropTypes.string,
    })
  ),
  searchList: PropTypes.arrayOf(
    PropTypes.shape({
      strDrink: PropTypes.string,
      strDrinkThumb: PropTypes.string,
      idDrink: PropTypes.string,
    })
  ),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  requestCocktailList: PropTypes.func.isRequired,
  filterCocktails: PropTypes.func.isRequired,
};

CocktailListScreen.defaultProps = {
  cocktailList: null,
  searchList: null,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CocktailListScreen);

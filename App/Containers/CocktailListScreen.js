import React from 'react'
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import CocktailListActions from '../Redux/CocktailListRedux';
import CocktailListItem from '../Components/CocktailListItem';
import { Metrics, Colors, Icons } from '../Themes';
import RoutesConfiguration from '../Config/RoutesConfig';
import ErrorMessage from '../Components/ErrorMessage';
import FilterInput from '../Components/FilterInput';
import Header from '../Components/Header';
import Immutable from 'seamless-immutable';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Entypo';



// Styles
import styles from './Styles/CocktailListScreen'

class CocktailListScreen extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }


  _onRefresh = () => {
    this.props.cocktailListRequest();
  };

  renderRow = ({item}) => {
    return (
      <CocktailListItem
        imageSource={item.strDrinkThumb}
        onPressItem={this._onPressItem}
        style={styles.row}
        idDrink={item.idDrink}
        text={item.strDrink}
      />
    )
  };

  _onPressItem = (idDrink) =>{
    this.props.navigation.navigate(RoutesConfiguration.ROUTE_COCKTAIL_SINGLE_SCREEN,{idDrink});
  };

  _filterCocktails = (searchText) =>{
    this.props.setSearchText(searchText);
    if(searchText !== ''){
      const filteredList = this.props.originalCocktailList;
      const regex = new RegExp(`${(searchText).trim()}`, 'i');
      let searchResult = filteredList.filter(cocktail => cocktail.strDrink.search(regex) >= 0);
      this.props.cocktailListFiltered(Immutable.asMutable(searchResult).sort(this.orderCocktailList))
    }
  };

  // Render a header
  renderHeader = () =>
    <View style={styles.sectionHeader}>
      <Text style={[styles.label]}>
        - Cocktails  -
      </Text>
      <Icon name={Icons.drinkIcon} size={15} color={Colors.silver} />
    </View>;


  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>;

  renderSeparator = () =>
    <Text style={styles.label}> - ~~~~~ - </Text>;

  keyExtractor = (item, index) => `${item.idDrink}`;

  itemLayout = (data, index) => (
    {length: Metrics.listItemWithThumbnailHeight, offset: Metrics.listItemWithThumbnailHeight * index, index}
  );

  orderCocktailList(a, b) {
    if (a.strDrink < b.strDrink) { return -1; }
    if (a.strDrink > b.strDrink) { return 1; }
    return 0;
  }

  _onPressRightButton = () =>{
    this.props.setSearchInputState(!this.props.searchInputState)
  };

  render () {
    const {cocktailList, cocktailListError, cocktailListLoading, searchInputState} = this.props;
    return (
      <View style={styles.container}>
        <Header
          title="COCKTAILS APP"
          rightButtonIcon={ searchInputState ?Icons.closeIcon : Icons.searchIcon }
          onPressRightButton={this._onPressRightButton}
        />
        <Animatable.View transition="height" ease="ease-in-out-circ" style={{height: searchInputState === true ? 50 : 0}}>
          <FilterInput
            filterCocktails={this._filterCocktails}
            searchText={this.props.searchText}
          />
        </Animatable.View>

        <ActivityIndicator size={Metrics.spinnerSize} color={Colors.silver} animating={cocktailListLoading}/>
        {cocktailListError ? <ErrorMessage message="The connection to the server has failed."/>:
          <FlatList
            contentContainerStyle={styles.listContent}
            data={cocktailList ? cocktailList : []}
            renderItem={this.renderRow}
            keyExtractor={this.keyExtractor}
            ListHeaderComponent={this.renderHeader}
            ListEmptyComponent={this.renderEmpty}
            ItemSeparatorComponent={this.renderSeparator}
            itemLayout={this.itemLayout}
            refreshControl={
            <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
          />
          }
            removeClippedSubviews={true}
            initialNumToRender={10}
          /> }

      </View>
    )
  }

  componentDidMount(){
    if(this.props.cocktailList == null || this.state.refreshing){
      this.props.cocktailListRequest();
    }
  }

}

const mapStateToProps = (state) => {
  return {
    originalCocktailList : state.cocktailList.cocktailList,
    cocktailListError : state.cocktailList.cocktailListError,
    cocktailList : state.cocktailList.cocktailListFiltered,
    cocktailListLoading : state.cocktailList.cocktailListLoading,
    searchText : state.cocktailList.searchText,
    searchInputState : state.cocktailList.searchInputState,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    cocktailListFiltered: (cocktailListFiltered) => dispatch(CocktailListActions.cocktailListFiltered(cocktailListFiltered)),
    cocktailListRequest: () => dispatch(CocktailListActions.cocktailListRequest()),
    setSearchInputState: (searchInputState) => dispatch(CocktailListActions.setSearchInputState(searchInputState)),
    setSearchText: (searchText) => dispatch(CocktailListActions.setSearchText(searchText)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CocktailListScreen)

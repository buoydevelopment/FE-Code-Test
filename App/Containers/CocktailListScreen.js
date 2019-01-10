import React from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View
} from "react-native";
import { connect } from "react-redux";
import Immutable from "seamless-immutable";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/Entypo";
import PropTypes from "prop-types";
import CocktailListActions from "../Redux/CocktailListRedux";
import CocktailListItem from "../Components/CocktailListItem";
import { Metrics, Colors, Icons } from "../Themes";
import RoutesConfiguration from "../Config/RoutesConfig";
import { ErrorMessage } from "../Components/ErrorMessage";
import { FilterInput } from "../Components/FilterInput";
import Header from "../Components/Header";
// Styles
import styles from "./Styles/CocktailListScreen";

class CocktailListScreen extends React.PureComponent {
  static defaultProps = {
    cocktailList: [],
    cocktailListError: false,
    cocktailListLoading: false,
    originalCocktailList: [],
    searchInputState: false,
    searchText: ""
  };

  static propTypes = {
    cocktailList: PropTypes.array,
    cocktailListError: PropTypes.bool,
    cocktailListFiltered: PropTypes.func.isRequired,
    cocktailListLoading: PropTypes.bool,
    cocktailListRequest: PropTypes.func.isRequired,
    originalCocktailList: PropTypes.array,
    navigation: PropTypes.object.isRequired,
    searchInputState: PropTypes.bool,
    setSearchInputState: PropTypes.func.isRequired,
    setSearchText: PropTypes.func.isRequired,
    searchText: PropTypes.string
  };

  static orderCocktailList(a, b) {
    if (a.strDrink < b.strDrink) {
      return -1;
    }
    if (a.strDrink > b.strDrink) {
      return 1;
    }
    return 0;
  }

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  componentDidMount() {
    const { cocktailList, cocktailListRequest } = this.props;
    const { refreshing } = this.state;
    if (cocktailList == null || refreshing) {
      cocktailListRequest();
    }
  }

  renderEmpty = () => (
    <Text style={styles.label}> - Nothing to See Here - </Text>
  );

  renderSeparator = () => <Text style={styles.label}> - ~~~~~ - </Text>;

  renderHeader = () => (
    <View style={styles.sectionHeader}>
      <Text style={[styles.label]}>- Cocktails -</Text>
      <Icon name={Icons.drinkIcon} size={15} color={Colors.silver} />
    </View>
  );

  renderRow = ({ item }) => (
    <CocktailListItem
      imageSource={item.strDrinkThumb}
      onPressItem={this.onPressItem}
      style={styles.row}
      idDrink={item.idDrink}
      text={item.strDrink}
    />
  );

  filterCocktails = searchText => {
    const {
      setSearchText,
      originalCocktailList,
      cocktailListFiltered
    } = this.props;
    setSearchText(searchText);
    if (searchText !== "") {
      const regex = new RegExp(`${searchText.trim()}`, "i");
      const searchResult = originalCocktailList.filter(
        cocktail => cocktail.strDrink.search(regex) >= 0
      );
      cocktailListFiltered(
        Immutable.asMutable(searchResult).sort(
          CocktailListScreen.orderCocktailList
        )
      );
    }
  };

  keyExtractor = item => `${item.idDrink}`;

  itemLayout = (data, index) => ({
    length: Metrics.listItemWithThumbnailHeight,
    offset: Metrics.listItemWithThumbnailHeight * index,
    index
  });

  onRefresh = () => {
    const { cocktailListRequest } = this.props;
    cocktailListRequest();
  };

  onPressItem = idDrink => {
    const { navigation } = this.props;
    navigation.navigate(RoutesConfiguration.ROUTE_COCKTAIL_SINGLE_SCREEN, {
      idDrink
    });
  };

  onPressRightButton = () => {
    const { setSearchInputState, searchInputState } = this.props;
    setSearchInputState(!searchInputState);
  };

  render() {
    const {
      cocktailList,
      cocktailListError,
      cocktailListLoading,
      searchInputState,
      searchText
    } = this.props;
    const { refreshing } = this.state;
    return (
      <View style={styles.container}>
        <Header
          title="COCKTAILS APP"
          rightButtonIcon={
            searchInputState ? Icons.closeIcon : Icons.searchIcon
          }
          onPressRightButton={this.onPressRightButton}
        />
        <Animatable.View
          transition="height"
          ease="ease-in-out-circ"
          style={{ height: searchInputState === true ? 50 : 0 }}
        >
          <FilterInput
            filterCocktails={this.filterCocktails}
            searchText={searchText}
          />
        </Animatable.View>

        <ActivityIndicator
          size={Metrics.spinnerSize}
          color={Colors.silver}
          animating={cocktailListLoading}
        />
        {cocktailListError ? (
          <ErrorMessage message="The connection to the server has failed." />
        ) : (
          <FlatList
            contentContainerStyle={styles.listContent}
            data={cocktailList || []}
            renderItem={this.renderRow}
            keyExtractor={this.keyExtractor}
            ListHeaderComponent={this.renderHeader}
            ListEmptyComponent={this.renderEmpty}
            ItemSeparatorComponent={this.renderSeparator}
            itemLayout={this.itemLayout}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={this.onRefresh}
              />
            }
            removeClippedSubviews
            initialNumToRender={10}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  originalCocktailList: state.cocktailList.cocktailList,
  cocktailListError: state.cocktailList.cocktailListError,
  cocktailList: state.cocktailList.cocktailListFiltered,
  cocktailListLoading: state.cocktailList.cocktailListLoading,
  searchText: state.cocktailList.searchText,
  searchInputState: state.cocktailList.searchInputState
});

const mapDispatchToProps = dispatch => ({
  cocktailListFiltered: cocktailListFiltered =>
    dispatch(CocktailListActions.cocktailListFiltered(cocktailListFiltered)),
  cocktailListRequest: () =>
    dispatch(CocktailListActions.cocktailListRequest()),
  setSearchInputState: searchInputState =>
    dispatch(CocktailListActions.setSearchInputState(searchInputState)),
  setSearchText: searchText =>
    dispatch(CocktailListActions.setSearchText(searchText))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CocktailListScreen);

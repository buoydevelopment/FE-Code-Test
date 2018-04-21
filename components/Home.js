import React, { Component } from 'react';
import { connect } from 'react-redux';
import { drinksDataLoaded } from '../actions';
import { makeRemoteRequest } from '../utils/Utils';
import { SearchBar, Icon } from 'react-native-elements';
import {
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Text,
  TouchableOpacity
} from 'react-native';

import { PropTypes } from 'prop-types';
import HideableView from '../components/HideableView';
import DrinkItem from '../components/DrinkItem';

const urlAPI = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass";

class Home extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerTintColor: "white",
      headerRight: (
        <TouchableOpacity onPress={() => {params.toogleSearch()}}>
             <Icon name="search" size={35} color="#fff" backgroundColor="#fff" />
        </TouchableOpacity> 
      )
    };
  };
  
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      visible: false,
      loading: false,
      data: [],
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
      this.props.navigation.setParams({ toogleSearch: this.toogleSearchView.bind(this) });

     this.makeRequest(urlAPI);
  }

  makeRequest(url) {
      this.setState({ loading: true });
    makeRemoteRequest(url)
        .then((dataResponse) => {
            this.setState({
                data: dataResponse.drinks,
                error: dataResponse.error || null,
                loading: false,
                refreshing: false
            });

            // Store loaded employee data in Redux store
            this.props.DrinksDataLoaded(this.state.data);
        })
        .catch(error => {
            this.setState({ error, loading: false });
        });
  }

  toogleSearchView() {
    this.setState({
        visible: !this.state.visible
    });
  }

  searchChanged(text) {
    this.setState({ searchTerm: text });
  }

  // Loading spinner
  renderLoading() {
    if(!this.props.loading) {
      return null
    };

    return (
      <View style={styles.loading}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  }

  handlePress(item) {
    this.props.navigation.navigate(
      "DrinkDetail",
      { item },
    );
  }

  _renderItem = ({item}) => (
    <DrinkItem
      id={item.id}
      item={item}
      onPress={() => this.handlePress(item)}
    />
  );

  render() {
    const { data, loading, error, searchTerm } = this.state;
  
    if (loading) {
      if (error){
        return(
          <View><Text>Please try again</Text></View>
        );
      }
      return this.renderLoading();
    }

    let newData = data.filter(function(item){
      const itemData = item.strDrink.toUpperCase()
      const textData = searchTerm.toUpperCase()
      return itemData.indexOf(textData) > -1
    });
    
    return (
      <View style={{ flex: 1, backgroundColor: '#53BCD0'}}>
        <HideableView visible={this.state.visible}>
          <View style={{ flex: 0.05}}>      
            {/* Search Field */}
            <SearchBar
              placeholder="Search by name..."
              onChangeText={ text => this.searchChanged(text) }
              lightTheme
              round
            />    
          </View>
        </HideableView>    
        <View style={{ flex: 0.95, paddingVertical: 20 ,marginVertical: 20}}>
          <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
            <FlatList
              ref="mainList"
              data={ newData }
              extraData={this.state}
              renderItem={this._renderItem}       
              keyExtractor={ item => parseInt(item.idDrink)}
              onRefresh={this.handleRefresh}
              refreshing={this.state.refreshing}
              onEndReached={this.handleLoadMore}
              onEndReachedThreshold={50}              
            />
          </ScrollView>
        </View>
      </View>
    );
  }};

const styles = StyleSheet.create({
  loading: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#CED0CE"
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00FF7F'
  },
  imageStyles: {
      height: 300,
      borderRadius: 5,
      marginBottom: 10
   },
});

const mapStateToProps = ({ drinks }) => {
  const { allDrinks, loading } = drinks;
  return { allDrinks, loading };
}

export default connect(mapStateToProps, { drinksDataLoaded })(Home);
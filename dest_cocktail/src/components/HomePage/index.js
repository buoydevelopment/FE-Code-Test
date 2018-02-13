import React from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  TextInput,
  Keyboard
} from 'react-native'

import DrinkPreview from './DrinkPreview'
import Search from './Search'
import Loader from '../../common/components/Loader'
import { getDrinksList } from '../../api/drinks';

import commonStyles from '../../common/styles'

class HomePage extends React.Component {

  state = {
    drinks: [],
    filteredDrinks: [],
    isActiveSearch: false
  }

  componentDidMount() {

    getDrinksList()
    .then(res => {
      const {drinks} = res.data;

      this.setState({drinks, filteredDrinks: drinks});
    })
    .catch(err => {
      console.log(err);
    });

  }

  _handleChange = (value) => {
    const {drinks} = this.state;

    const filteredDrinks = drinks.filter((drink) => drink.strDrink.indexOf(value) !== -1);

    this.setState({filteredDrinks});
  }

  _handleClick = () => {
    this.setState((prevState) => ({
      isActiveSearch: !prevState.isActiveSearch
    }), 
    () => {
      if(!this.state.isActiveSearch) Keyboard.dismiss();
    });
  }

  render() {
    const {drinks, isActiveSearch, filteredDrinks} = this.state;
    const {navigation} = this.props;

    const searchBarDisplay = isActiveSearch ? 'flex' : 'none';
    const drinksToShow = isActiveSearch ? filteredDrinks : drinks;

    if(!drinks.length) return <Loader />

    return (
      <View style={commonStyles.container}>

        <View style={commonStyles.header}>
          <Text style={commonStyles.headerBtn}></Text>

          <Text style={commonStyles.headerText}>Random drinks 0.1</Text>

          <Search clickHandler={this._handleClick}/>
        </View>

        <View style={[styles.searchBarWrap, {display: searchBarDisplay}]}>
          <TextInput 
            style={styles.inputSearch}
            placeholderTextColor='#fff'
            placeholder='Enter the name of the drink'
            underlineColorAndroid='transparent'
            onChangeText={this._handleChange}/>
        </View>

        <FlatList 
          data={drinksToShow}
          renderItem={({item}) => <DrinkPreview navigation={navigation} data={item} />}
          keyExtractor={(item) => item.idDrink}
          style={styles.scrollContainer} />
        
      </View>
    );
  }
};

export default HomePage;

const styles = StyleSheet.create({

  scrollContainer: {
    width: '100%',
    paddingHorizontal: 20
  },

  searchBarWrap: {
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
    margin: 10
  },

  inputSearch: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    color: '#fff',
    paddingBottom: 5
  }

});
import React, { Component } from 'react'
import {
  View,
  BackHandler
} from "react-native";
import { width, height } from 'react-native-dimension'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions'

import MainMenuScreen from './MainMenuScreen'

import { getLists } from '../../lib/api';

class MainMenuScreenContainer extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.initialState = {
      cocktails: this.props.cocktails ? this.props.cocktails : [],
      keywordText: ''
    };
    this.state = this.initialState;
  }

  componentDidMount() {
    // Get whole list of cocktails
    getLists()
      .then((response) => {
        if (response && response.drinks) {
          let lists = response.drinks;
          this.props.addCocktails(lists);
          this.setState({ cocktails: lists });
        } else {
          alert('Server connection failed');
        }
      })
      .catch((err) => {
        alert('Can not connect to server');
      });
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
  }

  onBackButtonPressed() {
    return true;
  }

  showCocktailItem(index) {
    this.props.navigation.navigate('PreviewScreen', { index, title: this.state.cocktails[index].strDrink });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainMenuScreen
          showCocktailItem={this.showCocktailItem.bind(this)}
          updateState={this.setState.bind(this)}
          {...this.state}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    cocktails: state.cocktails,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenuScreenContainer);

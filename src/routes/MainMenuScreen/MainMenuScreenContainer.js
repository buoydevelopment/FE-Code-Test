import React, { Component } from 'react'
import {
  View,
  Animated,
  Easing,
  BackHandler
} from "react-native";
import { width, height } from 'react-native-dimension'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions'

import MainMenuScreen from './MainMenuScreen'

import { getLists } from '../../lib/api';

class MainMenuScreenContainer extends Component {
  static navigationOptions = { title: "Welcome", header: null };

  constructor(props) {
    super(props);
    this.initialState = {
      ending: false,
      cocktails: this.props.cocktails ? this.props.cocktails : [],
      keywordText: ''
    };
    this.state = this.initialState;
    this.progress = new Animated.Value(0);
  }

  componentWillMount() {
  }

  componentDidMount() {
    getLists()
      .then((response) => {
        let lists = response.drinks;
        this.props.addCocktails(lists);
        this.setState({ cocktails: lists });
      })
      .catch((err) => {
        alert(JSON.stringify(err));
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
          progress={this.progress}
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

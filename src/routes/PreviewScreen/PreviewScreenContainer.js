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

import PreviewScreen from './PreviewScreen'
import { getDetails } from '../../lib/api'

class PreviewScreenContainer extends Component {
  static navigationOptions = { title: "Welcome", header: null };

  constructor(props) {
    super(props);
    this.initialState = {
      currentPage: 0,
      isLoading: false,
      ending: false,
      cocktails: this.props.cocktails ? this.props.cocktails : [],
      currentItem: {},
      currentIndex: this.props.navigation.state.params ? this.props.navigation.state.params.index : 0,
      currentTitle: this.props.navigation.state.params ? this.props.navigation.state.params.title : '',
    };
    this.state = this.initialState;
    this.progress = new Animated.Value(0);
    this.currentUser = null;
  }

  componentDidMount() {
    getDetails(this.state.currentIndex)
      .then((response) => {
        alert(JSON.stringify(response));
        this.setState({ currentItem: response.drinks[0] });
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

  backButtonTapped() {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <PreviewScreen
          backButtonTapped={this.backButtonTapped.bind(this)}
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

export default connect(mapStateToProps, mapDispatchToProps)(PreviewScreenContainer);

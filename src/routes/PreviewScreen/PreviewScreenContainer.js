import React, { Component } from 'react'
import {
  View,
  BackHandler
} from "react-native";
import { width, height } from 'react-native-dimension'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions'

import PreviewScreen from './PreviewScreen'

import { getDetails } from '../../lib/api'

class PreviewScreenContainer extends Component {
  static navigationOptions = { header: null };

  constructor(props) {
    super(props);
    this.initialState = {
      cocktails: this.props.cocktails ? this.props.cocktails : [],
      currentItem: {},
      currentIndex: this.props.navigation.state.params ? this.props.navigation.state.params.index : 0,
      currentTitle: this.props.navigation.state.params ? this.props.navigation.state.params.title : '',
      categories: []
    };
    this.state = this.initialState;
  }

  componentDidMount() {
    // Get detailed data of the selected item.
    getDetails(this.state.cocktails[this.state.currentIndex].idDrink)
      .then((response) => {
        if (response && response.drinks) {
          let categories = [];
          let drink = response.drinks[0];
          for (let i = 1; i <= 15; i += 1) {
            let categoryNum = `strIngredient${i}`;
            if (drink[categoryNum] && drink[categoryNum] !== undefined && drink[categoryNum] !== "") {
              categories.push(`${drink[`strMeasure${i}`]} - ${drink[categoryNum]}`)
            }
          }
          this.setState({ currentItem: response.drinks[0], categories });
        } else {
          alert('Server connection failed');
        }
      })
      .catch((err) => {
        alert('Can not connect to server.');
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
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <PreviewScreen
          backButtonTapped={this.backButtonTapped.bind(this)}
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

export default connect(mapStateToProps, mapDispatchToProps)(PreviewScreenContainer);

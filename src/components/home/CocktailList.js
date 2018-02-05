import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { getCocktails } from '../../actions';
import Header from '../common/Header'
import DrinksList from '../common/DrinksList';
import { Spinner } from '../common';

class Home extends Component {

  componentDidMount() {
    this.props.getCocktails()
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="Random drinks 0.1" />
        {this.props.loading ?
          <View style={{ alignSelf: 'center' }}>
            <Spinner />
          </View> :
          <DrinksList cocktails={this.props.cocktails} />}
      </View>
    );

  }
}
const mapStateToProps = ({ appReducer, cocktailsReducer }) => {
  return {
    loading: appReducer.loading,
    cocktails: cocktailsReducer.cocktails
  };
};

export default connect(mapStateToProps, { getCocktails })(Home);

import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import ListView from "../components/ListView";
import { getCocktails } from "../actions";
import Header from "../components/Header";
import Spinner from "../components/Spinner";

import { bindActionCreators } from "redux";

class Home extends Component {

  componentWillMount() {
    this.props.getCocktails();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#00BED5' }}>
        <Header title="Random Drinks 0.1" />
        {this.props.loading ?
          <Spinner /> :
          <ListView cocktails={this.props.cocktails} />}
      </View>
    );

  }
}



function mapStateToProps(store) {
  return { cocktails: store.cocktails.cocktails, loading: store.appReducer.loading };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getCocktails
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

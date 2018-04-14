import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { getCocktails } from '../../actions';
import { connect } from 'react-redux';
import Header from '../common/Header';
import Spinner from '../common/Spinner';
import CocktailItem from './CocktailItem';


class CocktailsList extends Component {

  componentDidMount() {
    this.props.getCocktails();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#00c0d4' }}>
        <Header title="Random drinks 0.1" showSearch />
        {
          this.props.loading ?
            <View style={{ alignSelf: 'center' }}>
              <Spinner />
            </View> :
            <FlatList
              data={this.props.cocktailsToShow}
              renderItem={({item}) => <CocktailItem drink={item} />}
              keyExtractor={(item, index) => index.toString()}
            ></FlatList>
        }
      </View>
    );
  };
};

const mapStateToProps = ({ appReducer, cocktailsReducer }) => {
  return {
    loading: appReducer.loading,
    cocktailsToShow: cocktailsReducer.cocktailsToShow
  };
};

export default connect(mapStateToProps, { getCocktails })(CocktailsList);

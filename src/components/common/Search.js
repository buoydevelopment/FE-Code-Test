import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { filterCocktails } from '../../actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.filterCocktails = (string) => {
      if (string) {
        this.props.filterCocktails(string);
      } else {
        this.props.filterCocktails('');
      }
    }
  }

  render() {
    const {searchStyles, inputStyles} = styles;

    return (
      <View styles={searchStyles}>
        <TextInput placeholder={'Search'} onChangeText={this.filterCocktails} placeholderTextColor={'grey'} style={inputStyles} />
      </View>
    );
  }
};

const styles = {
  inputStyles: {
    color: 'white',
  },
  searchStyles: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export default connect(null, { filterCocktails })(Search);

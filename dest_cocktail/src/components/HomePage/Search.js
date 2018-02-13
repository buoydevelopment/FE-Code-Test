import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'
import {PropTypes} from 'prop-types'

import commonStyles from '../../common/styles'


class Search extends React.Component {

  render() {
    const {clickHandler} = this.props;
    const searchIcon = require('../../assets/search.png');

    return (
      <TouchableWithoutFeedback
        style={[commonStyles.headerBtn, styles.headerBtn]}
        onPress={clickHandler}>

        <Image 
          style={styles.searchImage}
          source={searchIcon}/>


      </TouchableWithoutFeedback>
    );
  }
};

Search.propTypes = {
  clickHandler: PropTypes.func.isRequired
};

export default Search;

const styles = StyleSheet.create({

  headerBtn: {
    padding: 10,
  },

  searchImage: {
    width: 25,
    height: 25
  }

});
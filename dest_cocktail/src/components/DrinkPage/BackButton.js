import React from 'react'
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'
import {PropTypes} from 'prop-types'

import commonStyles from '../../common/styles'


class DrinkPreview extends React.Component {

  goBack = () => {
    const {goBack} = this.props.navigation;
    
    goBack();
  }

  render() {
    const backIcon = require('../../assets/left-arrow.png');

    return (
      <TouchableWithoutFeedback
        style={[commonStyles.headerBtn, styles.headerBtn]}
        onPress={this.goBack}>

        <Image 
          style={styles.backImage}
          source={backIcon}/>


      </TouchableWithoutFeedback>
    );
  }
};

DrinkPreview.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default DrinkPreview;

const styles = StyleSheet.create({

  headerBtn: {
    padding: 10
  },

  backImage: {
    width: 25,
    height: 25
  }

});
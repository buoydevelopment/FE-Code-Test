import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'
import {PropTypes} from 'prop-types'

class DrinkPreview extends React.Component {

  openDetailedDrink = () => {
    const {idDrink} = this.props.data;
    const {navigate} = this.props.navigation;
    
    navigate('Drink', {idDrink});
  }

  render() {
    const {strDrink, strDrinkThumb} = this.props.data;

    return (
      <TouchableWithoutFeedback
        onPress={this.openDetailedDrink}>

        <View style={styles.container}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>{strDrink}</Text>
          </View>

          <View>
            <Image 
              style={styles.thumbnail}
              source={{uri: `http://${strDrinkThumb}`}}/>
          </View>

        </View>

      </TouchableWithoutFeedback>
    );
  }
};

DrinkPreview.propTyper = {
  data: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default DrinkPreview;

const styles = StyleSheet.create({

  container: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },

  titleContainer: {
    width: '50%'
  },

  title: {
    fontSize: 24
  },

  thumbnail: {
    width: 125,
    height: 125,
    borderRadius: 5
  }

});
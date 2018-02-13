import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator
} from 'react-native'

import {getDrink} from '../../api/drinks'
import Loader from '../../common/components/Loader'
import BackButton from './BackButton'


import commonStyles from '../../common/styles'


class DrinkPage extends React.Component {

  state = {
    title: '',
    thumb: '',
    instructions: '',
    ingridients: [],
    isLoading: true
  }

  componentDidMount() {
    const {idDrink} = this.props.navigation.state.params;
    
    getDrink(idDrink)
      .then(res => {
        const drink = res.data.drinks[0];

        this.configState(drink);
      })
      .catch(err => {
        console.log(err);
      });
  }

  
  configState(drink) {
    const newDrink = {
      title: drink.strDrink,
      thumb: drink.strDrinkThumb,
      instructions: drink.strInstructions,
      ingridients: [],
      isLoading: false
    };

    Object.entries(drink).forEach(obj => {
      if(obj[0].indexOf('strIngredient') !== -1 && obj[1]) {
        newDrink.ingridients.push(obj[1]);
      }
    });

    this.setState(newDrink);
  }


  render() {
    const {title, thumb, instructions, ingridients, isLoading} = this.state;
    const {navigation} = this.props;
    
    if(isLoading) return <Loader />
    
    return (
      <View style={[commonStyles.container, styles.container]}>
        
        <View style={commonStyles.header}>
          <BackButton navigation={navigation}/>

          <Text style={commonStyles.headerText}>{title}</Text>

          <Text style={commonStyles.headerBtn}></Text>
        </View>

        <View style={styles.drinkCard}>
          <Image 
            style={styles.thumb}
            resizeMode='cover'
            source={{uri: `http://${thumb}`}}/>

          <View style={styles.ingridientsContainer}>
            <Text style={styles.titleText}>Ingridients:</Text>
            {ingridients.map((item, i) => <Text style={styles.listText} key={i}>• {item}</Text>)}
          </View>

          <View>
            <Text style={styles.titleText}>How to prepare:</Text>
            <Text>
              {instructions}
            </Text>
          </View>

        </View>

      </View>
    );
  }
};

export default DrinkPage;

const styles = StyleSheet.create({

  container: {
    paddingHorizontal: 20
  },
  
  drinkCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10
  },

  thumb: {
    height: 200,
    marginBottom: 20
  },

  ingridientsContainer: {
    marginBottom: 20,
  },

  titleText: {
    fontSize: 16,
    marginBottom: 5
  },

  listText: {
    paddingLeft: 5,
    marginBottom: 5
  }

});
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default class CocktailDetailScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: params.cocktail.strDrink
    };
  };

  state = {
  	cocktail: {}
  };

  componentWillMount(){

  	const idDrink = this.props.navigation.state.params.cocktail.idDrink
  	const endpoint = 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + idDrink

  	fetch(endpoint)
      .then((response) => response.json())
      .then((responseJson) => {


      	const drink = responseJson['drinks'][0]

      	let cocktailObject = {
  				instructions: drink['strInstructions'],
  				name:         drink['strDrink'],
  				photo_url:    drink['strDrinkThumb'],
  			}

  			counter = 1;
  			while(drink['strIngredient' + counter] != ''){
  				cocktailObject['strIngredient' + counter] = drink['strIngredient' + counter]
  				counter += 1
  			}

      	this.setState(
      		{
      			cocktail: cocktailObject
      		}
      	)

      })
      .catch((error) => {
        console.error(error);
      });

  }


  renderIngredients(){

  	let ingredient_keys = Object.keys(this.state.cocktail)
  													.filter(key => key.startsWith('strIngredient'))

    return ingredient_keys.map( (ingredient_key) => {
    	return <Text style={ styles.ingredient} key={ingredient_key}> { this.state.cocktail[ingredient_key]} </Text>
    })

  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.cocktailDetails}>
  			  <View style={{height:250}} >
  			  	<Image
  	          style={{flex:1, height: undefined, width: undefined, padding: 0}}
  	          source={{uri: this.state.cocktail.photo_url }}
  	          borderRadius={6}
  	        />
  			  </View>
        	<View style={{paddingTop: 25}}>
        	  { this.renderIngredients() }
        	</View>


        	<View style={{paddingTop: 25}}>
        		<Text style={styles.text}>{`\u2022 How To Prepare:`}</Text>
        	</View>

        	<View style={{paddingTop: 5}}>
        		<Text style={styles.text}>{ this.state.cocktail.instructions }</Text>
        	</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4DBCD2',
  },

  cocktailDetails:{
  	flex:1,
  	padding: 10,
  	backgroundColor:'white',
  	marginLeft: 15,
  	marginRight: 15,
  	marginTop: 15
  },

  cocktailName:{
  	fontSize: 25,
  	color: '#7D7D7D'
  },

  ingredient:{
  	fontSize: 17,
  	color: '#7D7D7D'

  },

  text:{
  	fontSize: 17,
  	color: '#7D7D7D'
  }

});

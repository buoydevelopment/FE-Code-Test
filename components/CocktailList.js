import React, { Component } from 'react'
import { View, Text } from 'react-native'
import CocktailItem from './CocktailItem'


class CocktailList extends Component {

	state = {
		cocktails: []
	};

	componentWillMount(){

		fetch('http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
	    .then((response) => response.json())
	    .then((responseJson) => {
	      this.setState({cocktails: responseJson['drinks'] })
	    })
	    .catch((error) => {
	      console.error(error);
	    });

	}

	renderCocktails(){
		return this.state.cocktails.map( cocktail => <CocktailItem cocktail={cocktail} key={cocktail.idDrink} />  )
	}

	render () {
		return (
			<View>
				{ this.renderCocktails() }
			</View>
		)
	}
}

export default CocktailList;
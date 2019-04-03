import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
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


	    const navigate = this.props.navigation.navigate

	}

	renderCocktail({item}){
		return <CocktailItem onPress={ () => this.onPress(item) } cocktail={item} key={item.idDrink} />
	}

	onPress(cocktail){
		this.props.navigation.navigate('CocktailDetail', {cocktail})
	}

	render () {
		return (
			<View>
				<FlatList
          data={ this.state.cocktails }
          renderItem={ this.renderCocktail.bind(this)}
          keyExtractor={item => item.idDrink}
        />
			</View>
		)
	}
}

export default CocktailList;
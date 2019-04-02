import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

class CocktailItem extends Component {

	_onTouch(){
		return ''
	};

	render() {
		return (
			<TouchableOpacity style={styles.containerStyle} onPress={() => navigate('CocktailDetail', {id: this.props.cocktail.id})}>
			  <View style={{flex:3}} >
			  	<Text style={styles.drinkName} > {this.props.cocktail.strDrink} </Text>
			  </View>
			  <View style={{flex:2}} >
			  	<Image
	          style={{flex:1}}
	          source={{uri: this.props.cocktail.strDrinkThumb }}
	          borderRadius={6}
	        />
			  </View>
			</TouchableOpacity>
		)
	}
}

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottom: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOppacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
		height: 160,
		backgroundColor: '#FFF',
		flex: 1,
		flexDirection: 'row',
		padding:8
	},

	drinkName: {
		color: '#7D7D7D',
		fontSize: 25
	}
}

export default CocktailItem;
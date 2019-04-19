import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import IngredientsList from '../IngredientsList/IngredientsList';

class DrinkCell extends Component {

    static itemsLimit = 2

    moreIngredients() {
        let totalIngredients = this.props.drink.ingredients.length
        if (totalIngredients > DrinkCell.itemsLimit) {
            return (
                <Text style={styles.moreIngredients}>y {totalIngredients - DrinkCell.itemsLimit} ingredientes mas</Text>
            )    
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                 <View style={styles.cellContainer}>
                    <View style={styles.labels}>
                        <Text style={styles.header}>{this.props.drink.strDrink}</Text>
                        <IngredientsList style={styles.ingredient} drink={this.props.drink} limit={DrinkCell.itemsLimit} displayDots/>
                        { this.moreIngredients() }
                    </View>
                    <View style={styles.imageContainer}>
                       <Image style={styles.image} source={{uri: this.props.drink.strDrinkThumb}} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default DrinkCell;

import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import IngredientsList from '../IngredientsList/IngredientsList';

class DrinkCell extends Component {

    static itemsLimit = 2;

    moreIngredients() {
        const { drink } = this.props;
        const ingredientsCount = drink.ingredients.length;
        if (ingredientsCount > DrinkCell.itemsLimit) {
            return (
                <Text style={styles.moreIngredients}>y {ingredientsCount - DrinkCell.itemsLimit} ingredientes mas</Text>
            )    
        }
    }

    render() {
        const { drink, onPress } = this.props;

        return (
            <TouchableOpacity onPress={onPress}>
                 <View style={styles.cellContainer}>
                    <View style={styles.labels}>
                        <Text style={styles.header}>{drink.strDrink}</Text>
                        <IngredientsList style={styles.ingredient} drink={drink} limit={DrinkCell.itemsLimit} displayDots/>
                        { this.moreIngredients() }
                    </View>
                    <View style={styles.imageContainer}>
                       <Image style={styles.image} source={{uri: drink.strDrinkThumb}} />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default DrinkCell;

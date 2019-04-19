import React, { Component } from 'react';
import { Text } from 'react-native';

class IngredientsList extends Component {

    render() {

        const { 
            drink, 
            limit, 
            displayDots, 
            displayMeasures , 
            style} = this.props;


        ingredients = drink.ingredients;

        if (limit) {
            ingredients = ingredients.slice(0,limit);
        }

        let list = ingredients.map((ingredient, index) => {
            finalText = "";
            
            if (displayDots) {
                finalText = "\u2022 ";
            }

            if (displayMeasures) {
                let measure = drink.measures[index];
                if (measure) {
                    finalText = measure + " - ";
                }
            }

            finalText = finalText + ingredient;
            return <Text key={index} style={style}>{finalText}</Text>
        });
        return list
    }
 
}

export default IngredientsList;

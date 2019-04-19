import React, { Component } from 'react';
import { Text } from 'react-native';

class IngredientsList extends Component {

    render() {

        ingredients = this.props.drink.ingredients

        if (this.props.limit) {
            ingredients = this.props.drink.ingredients.slice(0,this.props.limit)
        }

        let list = ingredients.map((ingredient, index) => {
            finalText = ""
            
            if (this.props.displayDots) {
                finalText = "\u2022 "
            }

            if (this.props.displayMeasures) {
                let measure = this.props.drink.measures[index]
                if (measure) {
                    finalText = measure + " - "
                }
            }

            finalText = finalText + ingredient
            return <Text key={index} style={this.props.style}>{finalText}</Text>
        });
        return list
    }
 
}

export default IngredientsList;

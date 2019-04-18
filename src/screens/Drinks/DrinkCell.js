import React, { Component } from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import IngredientsList from '../../components/IngredientsList'

class DrinkCell extends Component {

    moreIngredients() {
        let totalIngredients = this.props.drink.ingredients.length
        if (totalIngredients > 2) {
            return (
                <Text style={styles.moreIngredients}>y {totalIngredients - 2} ingredientes mas</Text>
            )    
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                 <View style={styles.cellContainer}>
                    <View style={styles.labels}>
                        <Text style={styles.header}>{this.props.drink.strDrink}</Text>
                        <IngredientsList style={styles.ingredient} drink={this.props.drink} limit="2" displayDots/>
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

const styles = StyleSheet.create({
    cellContainer: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#FFF",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 15,
        height: 160,
        borderRadius: 5,
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        }
    },
    labels: {
        flex: 1, 
        flexDirection: 'column',
        padding: 10
    },
    imageContainer: {
        flex: 1, 
        flexDirection: 'column',
        alignItems: 'flex-end', 
        width: 110,
        height: 130,
        padding: 15
    },
    image: {
        width: 110,
        height: 130,
        borderRadius: 5
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "#6F6F6F",
        marginBottom: 10,
    },
    ingredient: {
        fontSize: 14,
        color: "#6F6F6F",
    },
    moreIngredients: {
        fontSize: 13,
        color: "#6F6F6F",
        marginTop: 5,
    }
});

export default DrinkCell
import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { getDrinkDetail } from '../../store/actions';
import IngredientsList from '../../components/IngredientsList';

class DrinkDetailScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('drink', {strDrink: 'Loading Drinks...'} ).strDrink
        };
    };

    componentWillMount() {
        const drinkId = this.props.navigation.getParam('drinkId', '')
        this.props.onComponentLoad(drinkId)
    }

    render() {
        if (this.props.drink) {
            return (
                <ScrollView style={styles.scrollView}>
                <View style={styles.detailContainer}>
                    <View style={styles.cardContainer}>
                        <View style={styles.imageContainer}>
                           <Image style={styles.image} source={{uri: this.props.drink.strDrinkThumb}} />
                        </View>
                        <IngredientsList style={styles.ingredient} drink={this.props.drink} displayMeasures />
                        <Text style={styles.instructionsTitle}>{"\u2022"} How to prepare</Text>
                        <Text style={styles.instructions}>{this.props.drink.strInstructions}</Text>
                    </View>
                </View>
                </ScrollView>
            );    
        } else {
            return (
                <ScrollView style={styles.scrollView}>
                <View style={styles.detailContainer}>
                    <View style={styles.cardContainer}>
                        <Text>Loading Drink detail...</Text>
                    </View>
                </View>
                </ScrollView>
            );    
        }
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#53BCD0',
    },
    detailContainer: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'center',
        width: "100%",
        height: "100%",
        backgroundColor: '#53BCD0',
        padding: 20,
    },
    cardContainer: {
        flex: 1, 
        flexDirection: 'column',
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 5,
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        }
    },
    imageContainer: {
        flex: 1, 
        flexDirection: 'column',
        width: "100%",
        height: 250,
        marginBottom: 15,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 5
    },
    ingredient: {
        fontSize: 15,
        color: "#6F6F6F",
        marginBottom: 4,
    },
    instructionsTitle: {
        fontSize: 15,
        color: "#6F6F6F",
        marginTop: 10,
        marginBottom: 10,
    },
    instructions: {
        fontSize: 15,
        color: "#6F6F6F",
    }
});

const mapStateToProps = state => {
    return {
        drink: state.drinks.selected
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onComponentLoad: (drinkId) => dispatch(getDrinkDetail(drinkId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkDetailScreen);

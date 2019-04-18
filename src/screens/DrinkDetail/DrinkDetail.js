import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getDrinkDetail } from '../../store/actions';

class DrinkDetailScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('drink').name || 'Loading Drink'    
        };
    };

    componentWillMount() {
        const drinkId = this.props.navigation.getParam('drinkId', '')
        this.props.onComponentLoad(drinkId)
    }

    render() {
        return (
            <View style={styles.detailContainer}>
                <Text>Detalle - {this.props.drinkName}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    detailContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: '#53BCD0',
    }
});

const mapStateToProps = state => {
    return {
        screenTitle: state.drinks.selected ? state.drinks.selected.strDrink : "",
        drinkName: state.drinks.selected ? state.drinks.selected.strIngredient1 : ""
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onComponentLoad: (drinkId) => dispatch(getDrinkDetail(drinkId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkDetailScreen);
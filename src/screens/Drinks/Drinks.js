import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import DrinkCell from '../../components/DrinkCell/DrinkCell';
import { connect } from 'react-redux';
import { getDrinks } from '../../store/actions';

class DrinksScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Random Drinks 0.1",
        headerBackTitle: "Back"
    });

    componentDidMount() {
        this.props.onComponentLoad()
    }

    didSelectDrink(drinkId) {
        let drink = this.props.drinks.find((item) => {
            return item.key == drinkId
        })
    
        this.props.navigation.navigate('Details', {drinkId: drinkId, drink: drink})
    }

    render() {
        return (
            <FlatList
                style={styles.listContainer}
                data={this.props.drinks}
                renderItem={(info) => {
                    return (
                        <DrinkCell title={info.item.name} onPress={() => {this.didSelectDrink(info.item.key)}}/>
                    )
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

const mapStateToProps = state => {
    return {
        drinks: state.drinks.items.map((item) => {
            return {key:item.idDrink, name:item.strDrink}
        }),
        selected: state.selected
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onComponentLoad: () => dispatch(getDrinks())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinksScreen);

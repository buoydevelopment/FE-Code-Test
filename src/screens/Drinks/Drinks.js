import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import DrinkCell from './DrinkCell';
import { connect } from 'react-redux';
import { getDrinks } from '../../store/actions';

class DrinksScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Random Drinks 0.1",
        headerBackTitle: null,
    });

    componentDidMount() {
        this.props.onComponentLoad()
    }

    didSelectDrink(drinkId) {
        let item = this.props.drinks.find((item) => {
            return item.key == drinkId
        })
        this.props.navigation.navigate('Details', {drinkId: drinkId, drink: item.drink})
    }

    render() {
        return (
            <FlatList
                style={styles.listContainer}
                data={this.props.drinks}
                onRefresh={() => this.props.onComponentLoad()}
                refreshing={this.props.isLoading}
                renderItem={(info) => {
                    return (
                        <DrinkCell drink={info.item.drink} onPress={() => {this.didSelectDrink(info.item.key)}}/>
                    )
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
        backgroundColor: '#53BCD0',
    }
});

const mapStateToProps = state => {
    return {
        drinks: state.drinks.items.map((item) => {
            return {key: item.idDrink, drink: item}
        }),
        isLoading: state.drinks.isLoadingDrinks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onComponentLoad: () => dispatch(getDrinks())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinksScreen);

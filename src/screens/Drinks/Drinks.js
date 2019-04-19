import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getDrinks } from '../../store/actions';
import styles from './styles';
import DrinkCell from '../../components/DrinkCell/DrinkCell';

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
            return item.idDrink == drinkId
        })
        this.props.navigation.navigate('Details', {drinkId: drinkId, drink: item})
    }

    render() {
        return (
            <FlatList
                style={styles.listContainer}
                data={this.props.drinks}
                onRefresh={() => this.props.onComponentLoad()}
                refreshing={this.props.isLoading}
                keyExtractor={(drink) => drink.idDrink}
                renderItem={(info) => {
                    return (
                        <DrinkCell drink={info.item} onPress={() => {this.didSelectDrink(info.item.idDrink)}}/>
                    )
                }}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        drinks: state.drinks.items,
        isLoading: state.drinks.isLoadingDrinks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onComponentLoad: () => dispatch(getDrinks())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinksScreen);

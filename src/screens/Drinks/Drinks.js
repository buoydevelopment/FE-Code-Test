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
        const { onComponentLoad } = this.props;
        onComponentLoad()
    }

    didSelectDrink(drinkId) {
        const { drinks, navigation } = this.props;

        let item = drinks.find((item) => {
            return item.idDrink == drinkId;
        })
        navigation.navigate('Details', {drinkId: drinkId, drink: item});
    }

    onRefresh = () => this.props.onComponentLoad();

    keyExtractor = (drink) => drink.idDrink;

    renderItem = (info) => {
        return (
            <DrinkCell drink={info.item} onPress={() => {this.didSelectDrink(info.item.idDrink)}}/>
        )
    };

    render() {
        const { drinks, isLoading } = this.props;

        return (
            <FlatList
                style={styles.listContainer}
                data={drinks}
                onRefresh={this.onRefresh}
                refreshing={isLoading}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        drinks: state.drinks.items,
        isLoading: state.drinks.isLoadingDrinks,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onComponentLoad: () => dispatch(getDrinks())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinksScreen);

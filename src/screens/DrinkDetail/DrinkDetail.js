import React, { Component } from 'react';
import {Text} from 'react-native';
import { connect } from 'react-redux';
import { getDrinkDetail } from '../../store/actions';



class DrinkDetailScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('drink').name || 'default title'
        };
      };
    componentWillMount() {
        const drinkId = this.props.navigation.getParam('drinkId', '')
        this.props.onComponentLoad(drinkId)
    }

    render() {
        return (
            <Text>Detalle - {this.props.drinkName}</Text>
        );
    }
}


const mapStateToProps = state => {
    return {
        screenTitle: state.drinks.selected ? state.drinks.selected.strDrink : "",
        drinkName: state.drinks.selected ? state.drinks.selected.strDrink : ""
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onComponentLoad: (drinkId) => dispatch(getDrinkDetail(drinkId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkDetailScreen);
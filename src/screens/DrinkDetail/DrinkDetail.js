import React, { Component } from 'react';
import {Text} from 'react-native';

class DrinkDetailScreen extends Component {

    render() {
        const drinkId = this.props.navigation.getParam('drinkId', '')
        return (
            <Text>Detalle - {drinkId}</Text>
        );
    }
}

export default DrinkDetailScreen
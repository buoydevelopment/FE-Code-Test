import React, { Component } from 'react';
import {Text, TouchableOpacity} from 'react-native';

class DrinkCell extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Text>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

export default DrinkCell
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getDrinks } from '../../store/actions'

class DrinksScreen extends Component {

    componentDidMount() {
        this.props.onComponentLoad();
    }

    render() {
        return (
            <View>
                <Text>Drinks Here</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        drinks: state.drinks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onComponentLoad: () => dispatch(getDrinks())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinksScreen);

import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getDrinks } from '../../store/actions'

class DrinksScreen extends Component {

    componentDidMount() {
        this.props.onComponentLoad();
    }

    render() {
        console.log(this.props.drinks)

        return (
            <FlatList
                style={styles.listContainer}
                data={this.props.drinks}
                renderItem={(info) => {
                    return (
                        <Text>{info.item.name}</Text>
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
        })
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onComponentLoad: () => dispatch(getDrinks())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinksScreen);

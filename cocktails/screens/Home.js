import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableWithoutFeedback, Image, TextInput } from 'react-native';
import { withCocktailContext } from '../contexts/CocktailContext';

class Home extends React.Component {
    state = {
        cocktails: [],
        filtered: null
    };

    componentDidMount() {
        this.props.cocktailsContext.getCocktails();
    }
    navigateToDetails(cocktail) {
        this.props.navigation.navigate('Details', { id: cocktail.idDrink, title: cocktail.strDrink });
    }

    onFilterChange(text) {
        let filtered = null;
        if (text) {
            filtered = this.props.cocktailsContext.cocktails.filter(cocktail => cocktail.strDrink.toLowerCase().indexOf(text.toLowerCase()) > -1);
        }        
        this.setState({ filtered });
    }

    render() {
        const items = this.state.filtered !== null ? this.state.filtered : this.props.cocktailsContext.cocktails;
        return (
            <View style={styles.root}>
                <TextInput onChangeText={this.onFilterChange.bind(this)} style={styles.filter}></TextInput>
                <FlatList
                    data={items}
                    keyExtractor={cocktail => cocktail.idDrink}
                    renderItem={({ item: cocktail }) => {
                        this.props.cocktailsContext.getCocktailDetails(cocktail.idDrink);
                        const details = this.props.cocktailsContext.cocktailsDetails[cocktail.idDrink];
                        return (
                            <TouchableWithoutFeedback onPress={() => { this.navigateToDetails(cocktail) }}>
                                <View style={styles.item}>
                                    <View style={styles.details}>
                                        <Text style={styles.title}>{cocktail.strDrink}</Text>
                                        {details.loading ? <ActivityIndicator></ActivityIndicator> : null}
                                        {
                                            details.strIngredient1 ?
                                                <Text style={styles.ingredient}>{'\u2022 ' + details.strIngredient1}</Text>
                                                : null
                                        }
                                        {
                                            details.strIngredient2 ?
                                                <Text style={styles.ingredient}>{'\u2022 ' + details.strIngredient2}</Text>
                                                : null
                                        }
                                        {
                                            details.ingredientsCount > 2 ?
                                                <Text>and {details.ingredientsCount - 2} more</Text>
                                                : null
                                        }
                                    </View>
                                    <Image
                                        source={{ uri: cocktail.strDrinkThumb }}
                                        PlaceholderContent={<ActivityIndicator />}
                                        style={styles.image}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        );
                    }}
                />
            </View>
        );
    }


};

const styles = StyleSheet.create({
    root: {

    },
    item: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    details: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        flexWrap: 'wrap'
    },
    title: {
        fontSize: 30,
    },
    image: {
        width: 120,
        height: 150,
        borderRadius: 10,
    },
    ingredient: {
        fontSize: 20
    },
    filter:{
        backgroundColor: '#FFF',
        borderRadius: 10,
        margin: 10
    }
});

export default withCocktailContext(Home);
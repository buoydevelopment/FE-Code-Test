import React from 'react';
import { withCocktailContext } from '../contexts/CocktailContext';
import { ActivityIndicator, View, Text, StyleSheet, Image, ScrollView } from 'react-native';

class Details extends React.Component {
    
    render() {
        const idDrink = this.props.navigation.getParam('id');
        this.props.cocktailsContext.getCocktailDetails(idDrink);
        const details = this.props.cocktailsContext.cocktailsDetails[idDrink];
        return (
            details ?
                <View style={styles.root}>
                    <Image
                        source={{ uri: details.strDrinkThumb }}
                        PlaceholderContent={<ActivityIndicator />}
                        style={styles.image}
                    />
                    <ScrollView style={styles.details}>

                        {
                            details.ingredients ?
                                details.ingredients.map(ingredient =>
                                    <Text
                                        key={ingredient.name}
                                        style={styles.text}
                                        >
                                        {ingredient.measure} - {ingredient.name}
                                    </Text>)
                                : null
                        }
                        <Text style={styles.howto}>{'\u2022 How to prepare'}</Text>
                        <Text style={styles.text}>{details.strInstructions}</Text>
                    </ScrollView>
                </View>
                : null
        );
    }
}

const styles = StyleSheet.create({
    root: {
        padding: 10,
        margin: 10,
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,

    },
    image: {
        width: undefined,
        height: undefined,
        flexGrow: 1,
        marginBottom: 10
    },
    howto: {
        fontSize: 18,
        margin: 8
    },
    text:{
        fontSize: 18
    },
    details: {
        flexBasis: 50,
        flex: 1
    }
});

const DetailsWithContext =withCocktailContext(Details);

DetailsWithContext.navigationOptions = ({ navigation }) => {
    return {
        title: navigation.getParam('title', 'Details'),
    };
};

export default DetailsWithContext;
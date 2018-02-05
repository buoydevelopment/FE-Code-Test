import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome'
import { getCocktailDetails } from '../../actions';
import Header from '../common/Header';
import { Spinner } from '../common/index';

class CocktailDetails extends Component {

    componentWillMount() {
        let drinkId = this.props.drinkId;
        this.props.getCocktailDetails(drinkId)
    }

    renderIngredients(details) {
        let detailsAux = details;
        let ingerdients = [];
        let measures = [];
        let list = [];

        for (let key in detailsAux) {
            if (key.indexOf("strIngredient") !== -1) {
                ingerdients.push(detailsAux[key])
            }
            if (key.indexOf("strMeasure") !== -1) {
                measures.push(detailsAux[key])
            }

        }
        measures.forEach((measure, index) => {
            if (measure !== null && !!measure.trim()) {
                list.push(<View style={{ flexDirection: 'row' }} key={index}>
                    <Text style={{ color: 'grey' }}>{measure} - </Text>
                    <Text style={{ color: 'grey' }}>{ingerdients[index]}</Text>
                </View>)
            }
        })
        return list
    }
    render() {
        const { strDrink, strInstructions } = this.props.cocktailDetails;
        const { imageStyle, bigCardStyles } = styles;
        let image = 'https://' + this.props.cocktailDetails.strDrinkThumb;

        return (
            <View style={{ flex: 1 }}>
                <Header title={this.props.loadDetails ? 'Loading..' : strDrink} showBack />
                {this.props.loadDetails ? <Spinner /> :
                    <View style={bigCardStyles}>
                        <ScrollView style={{ padding: 20 }}>
                            <Image
                                style={imageStyle}
                                source={{ uri: image }}
                                resizeMode="contain" />
                            {this.renderIngredients(this.props.cocktailDetails)}
                            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                                <Icon name='circle' size={10} color='grey' style={{ alignSelf: 'center', marginRight: 5 }} />
                                <Text style={{ color: 'grey' }}>How to prepare</Text>
                            </View>
                            <Text style={{ color: 'grey' }}>{strInstructions}</Text>
                        </ScrollView>
                    </View>}
            </View>
        );
    }
}

const styles = {
    imageStyle: {
        height: 300,
        width: null
    },
    bigCardStyles: {
        backgroundColor: '#fff',
        marginLeft: 20,
        marginRight: 20,
        padding: 20,
        borderRadius: 5,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2
    }
};

const mapStateToProps = ({ appReducer, cocktailsReducer }) => {
    return {
        loadDetails: appReducer.loadDetails,
        cocktailDetails: cocktailsReducer.cocktailDetails
    };
};

export default connect(mapStateToProps, { getCocktailDetails })(CocktailDetails);
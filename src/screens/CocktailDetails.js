import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import Spinner from "../components/Spinner";
import { selectCocktail } from "../actions";
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "../components/Header";
import LOADING_GIF from '../assets/loading_.gif'
class CocktailDetails extends Component {

    renderPreparation(cocktail) {
        let detailsAux = cocktail;
        let ingerdients = [];
        let measures = [];
        let list = [];
        console.log("detailAux", detailsAux);
        for (let key in detailsAux) {
            if (key.includes("strIngredient")) {
                ingerdients.push(detailsAux[key])
            }
            if (key.includes("strMeasure")) {
                measures.push(detailsAux[key])
            }

        }
        measures.forEach((measure, index) => {
            if (measure !== null && !!measure.trim()) {
                list.push(<View style={{ flexDirection: 'row', paddingTop: 10 }} key={index}>
                    <Text>{measure} - </Text>
                    <Text>{ingerdients[index]}</Text>
                </View>)
            }
        });
        console.log("list", list);
        return list
    }

    componentWillMount() {
        let id = this.props.idDrink;
        console.log("id", id);
        this.props.selectCocktail(id)
    }

    render() {
        console.log("this.props.cocktail", this.props.cocktail);
        const { strDrink, strInstructions, strDrinkThumb } = this.props.cocktail;
        return (
            <View style={{ flex: 1, backgroundColor: '#00BED5' }}>
                <Header showBack title={strDrink} />
                {this.props.loading ?
                    <Spinner /> :
                    <ScrollView style={{ backgroundColor: '#fff', padding: 20, margin: 20, borderRadius: 8 }}>
                        <Image

                            defaultSource={{ uri: LOADING_GIF, width: 100, height: 100 }}
                            style={{ marginTop: 10, height: 300, width: null }}
                            prefetch={{ uri: strDrinkThumb }}
                            source={{ uri: strDrinkThumb }}
                            resizeMode="contain"
                        />
                        {this.renderPreparation(this.props.cocktail)}
                        <View style={{ flexDirection: 'row', marginVertical: 10, paddingTop: 10 }}>
                            <Icon name='circle' size={10} color='grey' style={{ alignSelf: 'center', marginRight: 5 }} />
                            <Text style={{ color: 'grey' }}>How to prepare</Text>
                        </View>
                        <Text style={{ color: 'grey', marginBottom: 20 }}>{strInstructions}</Text>
                    </ScrollView>
                }
            </View>);
    }

}


function mapStateToProps(store) {
    return { cocktail: store.cocktails.cocktailDetail, loading: store.appReducer.loading };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            selectCocktail
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(CocktailDetails);

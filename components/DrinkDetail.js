import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator} from 'react-native';
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Octicons';
import DrinkIngredients from './DrinkIngredients';
import { makeRemoteRequest } from '../utils/Utils';

const detailsURL = 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export default class DrinkDetail extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: `${navigation.state.params.item.strDrink}`,
        headerTintColor: "white",
        headerLeft: <Icon size={50} color={"#fff"} name={'arrow-left'} onPress={() => navigation.goBack()} />,
    });

    constructor(props) {
        super(props);

        this.state = {
          visible: false,
          loading: false,
          data: [],
          error: null,
          refreshing: false
        };
    }

    componentDidMount() {
        const idDrink = this.props.navigation.state.params.item.idDrink;
        this.getDrinkDetails(idDrink);
    }

    getDrinkDetails = (idDrink) => {
      const url = detailsURL + idDrink;
      this.setState({ loading: true });

      makeRemoteRequest(url)
          .then((dataResponse) => {
              this.setState({
                  data: dataResponse.drinks[0],
                  error: dataResponse.error || null,
                  loading: false,
                  refreshing: false
              });
          })
          .catch(error => {
              this.setState({ error, loading: false });
          });
    };

    // Loading spinner
    renderLoading() {
        return (
            <View style={{paddingVertical: 20, borderTopWidth: 1, borderColor: "#CED0CE"}}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    }

    getDrinkIngredients(recipe) {
        var listDrinkIngredients = [];

        for (var i = 1; !!recipe['strIngredient' + i]; i++) {
          let ingredient = recipe['strIngredient' + i];
          let amount = recipe['strMeasure' + i];
          let id = i;

          listDrinkIngredients.push({ id: id, ingredientName: ingredient, amount: amount });
        }
        return listDrinkIngredients;
    }

    render() {
        const { data, loading, error } = this.state;

        if (loading) {
          if (error){
            return(
              <View><Text>Please try again</Text></View>
            );
          }
          return this.renderLoading();
        }

        const {strDrinkThumb, strInstructions} = data;
        const {width, height} = require('Dimensions').get('window');

        return (
           <View style={{ flex: 1, backgroundColor: '#53BCD0'}}>
            <Card style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <View style={{ marginVertical: 10, flexDirection: 'row', alignSelf: 'center' }}>
                <Image
                  resizeMode='contain'
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 5,
                    width: width/2,
                    height: width/2
                  }}
                  prefetch={{ uri: strDrinkThumb }}
                  source={{ uri: strDrinkThumb }}
                />
                </View>
                <View style={{ marginVertical: 20, flexDirection: 'row' }}>
                  <DrinkIngredients drinkElements={this.getDrinkIngredients(data)} ></DrinkIngredients>
                </View>
                <View style={{ marginVertical: 10, flexDirection: 'row' }}>
                  <Icon name='primitive-dot' size={10} style={{ alignSelf: 'center' }} />
                  <Text>How to Prepare</Text>
                </View>
                <Text>{strInstructions}</Text>
            </Card>
          </View>
        );
    }
}   
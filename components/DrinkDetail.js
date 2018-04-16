  import React, { Component } from 'react';
  import { View, Text, Image, ScrollView } from 'react-native';
  import { List, ListItem, SearchBar, Card, Button } from 'react-native-elements';

  const detailsURL = 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
  
  export default class DrinkDetail extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
      title: `${navigation.state.params.item.strDrink}`,
      headerTintColor: "white",
      headerStyle: {
        backgroundColor:"red"
      }
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
    
      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            data: res.drinks[0],
            error: res.error || null,
            loading: false,
            refreshing: false
          });
        })
        .catch(error => {
          this.setState({ error, loading: false });
        });
    };
  
    render() {
      const { data, isLoading } = this.state;

      if (isLoading) {
        return <p>Loading ...</p>;
      }
  
      const {strDrink, strDrinkThumb, strInstructions} = data;

      return (
         <View style={{ flex: 1, backgroundColor: '#53BCD0'}}>
          <Card>
          <View style={{ marginVertical: 10, flexDirection: 'row' }}>
              <Image 
                resizeMode='contain'
                style={{
                  flex: 1,
                  aspectRatio: 1, 
                  borderWidth: 1,
                  borderColor: '#000',
                  borderRadius: 5,
                  height: 100,
                  width: 100,
                  borderRadius: 5
                }}
                prefetch={{ uri: strDrinkThumb }} 
                source={{ uri: strDrinkThumb }} 
              />
              </View>
              <View style={{ marginVertical: 10, flexDirection: 'row' }}>
                <Text>How to Prepare</Text>
              </View>
              <Text>{strInstructions}</Text>
          </Card>
        </View>
      );
    }
  };  
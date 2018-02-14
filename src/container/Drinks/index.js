import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DrinkActions } from "../../store/actions/index";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';

const { width, height } = Dimensions.get('window')

class Drinks extends Component {
  static navigationOptions = {
    title: 'Random Drinks',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: '#4ebcd1' },
  }

  constructor(props) {
    super();
    this.state = {
      drinks: [{ "strDrink": "9 1\/2 Weeks", "strDrinkThumb": "www.thecocktaildb.com\/images\/media\/drink\/xvwusr1472669302.jpg", "idDrink": "16108" }],
      drinksClone: [{ "strDrink": "9 1\/2 Weeks", "strDrinkThumb": "www.thecocktaildb.com\/images\/media\/drink\/xvwusr1472669302.jpg", "idDrink": "16108" }],
      search: '',
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.drinksState && nextProps.drinksState.drinks &&
      nextProps.drinksState.drinks.drinks && nextProps.drinksState.drinks.drinks.length) {
      this.setState({ drinks: nextProps.drinksState.drinks.drinks, drinksClone: nextProps.drinksState.drinks.drinks })
    }
  }

  componentDidMount() {
    this.props.getDrinks();
  }

  filter = (val) => {
    let { drinks } = this.state
    var newFilterArray = drinks.filter((data, index) => {
      var newValue = data.strDrink.toLowerCase();
      var filtered = val.toLowerCase();
      return newValue.search(filtered) != -1
    })
    this.setState({ search: val, drinksClone: newFilterArray })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerView}>
          <Header searchBar rounded style={styles.headerStyle}>
            <Item>
              <Input placeholder="" value={this.state.search} onChangeText={(value) => this.filter(value)} />
              <Icon name="ios-search" />
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>
        </View>
        {
          !this.props.drinksState.loading && this.state.drinks.length &&
          <FlatList
            data={this.state.drinksClone}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Details', { id: item.idDrink, name: item.strDrink })}
              >
                <View style={styles.flatView}>
                  <View style={styles.view}>
                    <View style={styles.textView}>
                      <Text style={styles.textHead}>{item.strDrink}</Text>
                      <Text style={[styles.text, { paddingTop: 5 }]}>{`\u2022 ${item.idDrink}`}</Text>
                      <Text style={styles.text}>{`\u2022 ${item.idDrink}`}</Text>
                      <Text style={styles.text}>{`\u2022 ${item.idDrink}`}</Text>
                    </View>
                    <Image
                      style={styles.imageStyle}
                      source={{ uri: `https://${item.strDrinkThumb}` }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.idDrink}
            showsVerticalScrollIndicator={false}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4ebcd1',
  },
  head: {
    color: '#FFF',
    paddingVertical: 10,
    textAlign: 'center',
  },
  containerView: {
    width: '100%',
    position: 'relative',
  },
  flatView: {
    width: width * 0.9,
    backgroundColor: '#FFF',
    height: width / 2.2,
    margin: 5,
    borderRadius: 2
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textView: {
    height: '100%',
    width: '50%',
    paddingLeft: 10,
    paddingTop: 7
  },
  text: {
    color: '#626262',
    fontSize: 11,
  },
  textHead: {
    color: '#626262',
    fontSize: 18
  },
  imageStyle: {
    width: width / 2.2 * 0.8,
    height: '80%',
    marginRight: width / 2.2 * 0.1 
  },
  headerStyle: { 
    backgroundColor: '#3d95a5'
   }
});

const mapStateToProps = (state) => {
  return { drinksState: state.DrinksReducer };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDrinks: () => dispatch(DrinkActions.getDrinks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);

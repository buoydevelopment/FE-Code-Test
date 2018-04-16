import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { List, ListItem, SearchBar, Card, Button } from 'react-native-elements';

export default class DrinkItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { strDrink, strDrinkThumb, idDrink } = this.props.item;
        const {width, height} = require('Dimensions').get('window');
        return (
            <TouchableOpacity onPress={this.props.onPress}>
            <Card>
              <View style={{flex: 1, flexDirection: 'row', width: width, borderRadius: 5}}>
                <View style={{flex: 4, flexDirection: 'column'}}>
                  <Text style={styles.titleText}>
                     {strDrink}
                  </Text>
                </View>
                <View style={{flex: 1}}></View>
                <View style={{flex: 5, flexDirection: 'column'}}>
                  <Image 
                    resizeMode='contain'
                    style={{
                      flex: 1,
                      aspectRatio: 1, 
                      borderWidth: 1,
                      borderColor: '#000',
                      borderRadius: 5,
                      overflow: 'hidden',
                      height: 120
                    }}
                    prefetch={{ uri: strDrinkThumb }} 
                    source={{ uri: strDrinkThumb }} 
                  />
              </View>
            </View>
          </Card>
          </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    },
    left: {
        flex: 1,
        justifyContent: "center"
    },
    middle: {
        flex: 5,
        justifyContent: "space-between",
        alignItems: "center"
    },
    right: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end"
    },
    titleText: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign:"left",
        textAlignVertical: "center"
    },
  });
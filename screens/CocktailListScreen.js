import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CockatilList from '../components/CocktailList';

export default class CocktailListScreen extends React.Component {
  static navigationOptions = {
    title: 'Random Drinks 0.1',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <CockatilList {...this.props}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Custom Styles
  listHeader: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    padding: 10
  },

  container: {
    flex: 1,
    backgroundColor: '#4DBCD2',
  }
})
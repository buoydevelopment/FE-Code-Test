import React from 'react';
import { Platform } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import CocktailsList from './src/components/cocktails-list/CocktailsList';
import CocktailDetails from './src/components/cocktail-details/CocktailDetails';

const RouterComponent = () => {
  return (
    <Router>
      <Scene hideNavBar styles={appStyles}>
        <Scene key="cocktailsList" component={CocktailsList} initial={true} title="List" />
        <Scene key="cocktailDetails" component={CocktailDetails} title="Details" />
      </Scene>
    </Router>
  );
};

const appStyles = {
  paddingTop: Platform.OS === 'ios' ? 20 : 0
};

export default RouterComponent;
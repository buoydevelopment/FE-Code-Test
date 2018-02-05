import React from 'react';
import { Platform } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import CocktailList from './src/components/home/CocktailList';
import CocktailDetails from './src/components/home/CocktailDetails';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: Platform.OS === 'ios' ? 20 : 0, backgroundColor: '#00BED5'}}>
        <Scene hideNavBar>
          <Scene key="cocktailList" component={CocktailList} />
          <Scene key="cocktailDetails" component={CocktailDetails} />
        </Scene>
    </Router>
  );
};

export default RouterComponent;

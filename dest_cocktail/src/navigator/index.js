import {StackNavigator} from 'react-navigation';

import HomePage from '../components/HomePage'
import DrinkPage from '../components/DrinkPage'


const RootNavigator = StackNavigator({
  Home: {screen: HomePage},
  Drink: {screen: DrinkPage}
}, {
  initialRouteName: 'Home',
  headerMode: 'none'
});

export default RootNavigator;
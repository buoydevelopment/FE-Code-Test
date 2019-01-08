import { createStackNavigator, createAppContainer } from 'react-navigation'
import CocktailListScreen from '../Containers/CocktailListScreen'
import CocktailSingleScreen from '../Containers/CocktailSingleScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  CocktailListScreen: { screen: CocktailListScreen },
  CocktailSingleScreen: { screen: CocktailSingleScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
});

export default createAppContainer(PrimaryNav)

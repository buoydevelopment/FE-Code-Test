import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import { Images } from '../Themes';
import AppConfiguration from '../Config/AppConfig';
import RoutesConfiguration from '../Config/RoutesConfig';

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {


  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='contain' />

          <View style={styles.centered}>
            <Image source={Images.launchLogo} style={styles.logo} />
          </View>
        <Text style={styles.slogan}>
          COCKTAILS APP
        </Text>
      </View>
    )
  }

  componentDidMount(){
    this.timeoutHandle = setTimeout(()=>{
      this.props.navigation.navigate(RoutesConfiguration.ROUTE_HOME);
    }, AppConfiguration.SPLASH_DURATION);
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutHandle);
  }

}

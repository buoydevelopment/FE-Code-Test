import React, { Component } from 'react';
import { Platform, StatusBar, View, Image, StyleSheet, Text, Easing, Animated } from 'react-native';
import { DrawerNavigator, StackNavigator, Header, TabNavigator } from 'react-navigation';
import { width, height } from 'react-native-dimension';

import MainMenuScreen from '../routes/MainMenuScreen';
import PreviewScreen from '../routes/PreviewScreen';

import { colors } from '../config/styles';
import images from '../config/images';

const headerStyle = {
  marginTop: 0,
};

export const routes = {
  getSignOutRoute() {
    return StackNavigator({
        MainMenuScreen: {
          screen: MainMenuScreen,
          navigationOptions: {
            title: 'MainMenuScreen',
            headerStyle,
            headerBackTitle: null,
          },
        },
        PreviewScreen: {
          screen: PreviewScreen,
          navigationOptions: {
            title: 'PreviewScreen',
            headerStyle,
            headerBackTitle: null,
          },
        },
      },
      {
        mode: 'card',
        initialRouteName: 'MainMenuScreen',
        navigationOptions: ({ navigation: { goBack, navigate } }) => ({
          gesturesEnabled: false,
        }),
      },
    );
  }
};

export default routes;

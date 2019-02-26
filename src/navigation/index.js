// @flow

import {
  BackHandler,
  Platform,
} from 'react-native';
import {
  Navigation as _Navigation,
} from 'react-native-navigation';
import {
  Provider,
} from 'react-redux';

import Cocktails from '../screens/cocktails';

type TScreens =
  | 'Buoy.Cocktails'
  | 'Buoy.Drawer'
;

import * as Style from '../stylesheet';

export interface INavigation {
  pop: () => void;
  popToRoot: () => void;
  push: (screenName: string, passProps?: Object) => void;
  toggleDrawer: () => void;
  setBackButtonHandler: () => void;
};

export default class Navigation {

  // react-native-navigation instance
  static _navigation: any;

  static store: * = null;

  static count: number = 0;

  static onPop: (() => any) | null = null;

  static navigatorStyle = {
    navBarHidden: true,
    screenBackgroundColor: Style.backgroundColor,
  };

  // react-native-navigation
  static set(_navigation: any): void {
    Navigation._navigation = _navigation;
    Navigation._navigation.setOnNavigatorEvent((e) => {
      if(e.id === 'drawer') { // eslint-disable-line
      } else if(e.id === 'backPress') {
        // if I am in the first screen dont do anything
        // backhandler listener will take care of this
        if(Platform.OS === 'android' && Navigation.isEmpty()) {
          return;
        }
        Navigation.pop();
      } else if(e.id === 'willDisappear') { // eslint-disable-line
      } else if(e.id === 'didDisappear') { // eslint-disable-line
      } else if(e.id === 'didAppear') { // eslint-disable-line
      }
    });
  }

  static register(screens: Array<[TScreens, Function]>): void {
    screens.forEach(([ screenId, funct ]) => {
      _Navigation.registerComponent(
        screenId,
        funct,
        Navigation.store,
        Provider
      );
    });
  }

  static start(
    initialScreen: TScreens,
    drawerScreen: TScreens,
  ): void
  {
    _Navigation.startSingleScreenApp({
      screen: {
        screen: initialScreen,
        navigatorStyle: {
          ...Navigation.navigatorStyle,
        },
        navigatorButtons: {},
      },
      /* not drawer at the moment
      drawer: {
        left: {
          screen: drawerScreen,
        },
      },
      */
      animationType: 'slide-down',
      appStyle: {
        orientation: 'portrait',
      },
    });
  }

  static init(store: any): void {
    Navigation.store = store;

    Navigation.register([
      [ 'Buoy.Cocktails', () => Cocktails ],
    ]);

    Navigation.start(
      'Buoy.Cocktails',
      'Buoy.Drawer'
    );
  }

  static toggleDrawer() : void {
    if(Navigation._navigation === null) {
      return;
    }
    Navigation._navigation.toggleDrawer({
      side: 'left',
      animated: true,
    });
  }

  static isEmpty(): bool {
    return Navigation.count === 0;
  }

  static push(screen: TScreens, passProps?: Object): void {
    if(Navigation._navigation === null) {
      return;
    }
    Navigation.count++;
    Navigation._navigation.push({
      screen,
      animationType: 'slide-horizontal',
      NavigationStyle: { ...Navigation.navigatorStyle },
      overrideBackPress: true,
      passProps,
    });
  }

  static pop(): void {
    if(Navigation._navigation === null) {
      return;
    }
    Navigation.count--;
    Navigation._navigation.pop();
    Navigation.onPop && Navigation.onPop();
  }

  static popToRoot(): void {
    if(Navigation._navigation === null) {
      return;
    }
    Navigation.count = 0;
    Navigation._navigation.popToRoot();
    Navigation.onPop && Navigation.onPop();
  }

  static popAndPush(screen: TScreens, passProps?: Object): void {
    Navigation.pop();
    setTimeout(() => Navigation.push(screen, passProps), 10);
  }

  static popToRootAndPush(screen: TScreens, passProps?: Object): void {
    Navigation.popToRoot();
    setTimeout(() => Navigation.push(screen, passProps), 10);
  }

  static popWithDelay(delay: number = 500): void {
    setTimeout(() => Navigation.pop(), delay);
  }

  static popToRootWithDelay(delay: number = 500): void {
    setTimeout(() => Navigation.popToRoot(), delay);
  }

}

// android only
BackHandler.addEventListener('hardwareBackPress', (): bool => {
  // exit app
  if(Navigation.isEmpty()) {
    return false;
  }
  return true;
});

import { Navigation } from 'react-native-navigation';
// import { Provider } from 'react-redux';
// import store from '../store';
import Welcome from './Welcome';

export function initApp(action) {
  switch (action) {
    case 'start': {
      break;
    }
    default:
      Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot({
          root: {
            component: {
              name: 'welcome',
            },
          },
        });
      });
      break;
  }
}

export const goToPage = (componentId, page, props) => {
  Navigation.push(componentId, {
    component: {
      name: page,
      passProps: props,
    },
  });
};

export const goBack = componentId => Navigation.pop(componentId);

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('welcome', () => Welcome);
}

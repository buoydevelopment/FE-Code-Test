// @noflow

import React, { PureComponent } from 'react';

import Navigation from './index';

export const bindComponentToNavigation = (Component) => {
  return class HOC extends PureComponent<{
    // react-native-navigation
    navigator: any
  }> {
    componentDidMount() {
      console.log('!!!!!!!!!!!!!!!',this.props.navigator);
      Navigation.set(this.props.navigator);
    }

    render() {
      return <Component {...this.props} />;
    }
  };
};

// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Animated,
} from 'react-native';

import BackButton from './back.button';

import * as Style from '../stylesheet';

type Props = {
  show: bool,
  onBack?: () => any,
};

type State = {
  opacity: Animated.Value,
  isDead: bool,
};

export default class Preloader extends PureComponent<Props, State> {

  static defaultProps = {
    show: true,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      opacity: new Animated.Value(props.show ? 1 : 0),
      isDead: props.show ? false : true,
    };
  }

  show = (): void => {
    this.setState({ isDead: false });
    this.state.opacity.setValue(0);
    Animated
      .timing(
        this.state.opacity,
        {
          toValue: 1,
          duration: 1500,
        }
      )
      .start(this.onAnimationShowEnd)
    ;
  }

  onAnimationShowEnd = (): void => {

  }

  hide = (): void => {
    this.state.opacity.setValue(1);
    Animated
      .timing(
        this.state.opacity,
        {
          toValue: 0,
          duration: 1500,
        }
      )
      .start(this.onAnimationHideEnd)
    ;
  }

  onAnimationHideEnd = (): void => {
    this.setState({ isDead: true });
  }

  componentWillReceiveProps(props: Props) {
    // must hide preloader
    if(!props.show && this.props.show) {
      this.hide();
    }
    // show preloader
    if(props.show && !this.props.show) {
      this.show();
    }
  }

  render() {
    const {
      onBack,
    } = this.props;
    const {
      opacity,
      isDead,
    } = this.state;
    if(isDead) {
      return null;
    }
    return (
<Animated.View
  style={[
    styles.container,
    { opacity },
  ]}
>
  {typeof onBack !== 'undefined' &&
  <BackButton
    onPress={onBack}
    style={styles.backButton}
    color={Style.blueColor}
  />
  }

  <ActivityIndicator
    size="large"
    color={Style.blueColor}
  />
</Animated.View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Style.blueColor,
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
});

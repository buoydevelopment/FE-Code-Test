// @flow

import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
} from 'react-native';

type Props = {
  style: any,
  children: any,
};

type State = void;

export default class MyTouchableOpacity extends PureComponent<Props, State> {

  render() {
    const {
      style,
      children,
    } = this.props;
    return (
<TouchableOpacity
  style={style}
>
  {children}
</TouchableOpacity>
    );
  }

}

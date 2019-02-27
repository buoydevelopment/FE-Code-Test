// @flow

import React, { PureComponent } from 'react';
import {

} from 'react-native';

import TouchableOpacity from './touchable.opacity';

import IconFA from 'react-native-vector-icons/FontAwesome';

type Props = {
  onPress: () => any,
  style?: any,
  color: string,
};

type State = void;

export default class BackButton extends PureComponent<Props, State> {

  static defaultProps = {
    color: '#fff',
  };

  render() {
    const {
      onPress,
      style,
      color,
    } = this.props;
    return (
<TouchableOpacity
  onPress={onPress}
  style={style}
>
  <IconFA
    name="angle-left"
    color={color}
    size={25}
  />
</TouchableOpacity>
    );
  }

}
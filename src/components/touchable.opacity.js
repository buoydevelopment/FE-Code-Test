// @flow

import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
} from 'react-native';

import EventEmitter from 'EventEmitter';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { throttleTime, tap } from 'rxjs/operators';

type Props = {
  style: any,
  children: any,
  onPress: () => any,
};

type State = void;

export default class MyTouchableOpacity extends PureComponent<Props, State> {

  static defaultProps = {
    onPress: () => {}
  };

  pressEmitter: EventEmitter = new EventEmitter();
  onPress$: any = null;

  componentDidMount() {
    this.onPress$ = fromEvent(this.pressEmitter, 'press')
      .pipe(
        throttleTime(500),
        tap(() => this.props.onPress()),
      )
      .subscribe()
    ;
  }

  componentWillUnmount() {
    this.pressEmitter.removeAllListeners();
    if(this.onPress$ !== null) {
      this.onPress$.unsubscribe();
    }
  }

  onPress = (): void => {
    this.pressEmitter.emit('press');
  }

  render() {
    const {
      style,
      children,
      onPress,
    } = this.props;
    return (
<TouchableOpacity
  style={style}
  onPress={this.onPress}
>
  {children}
</TouchableOpacity>
    );
  }

}

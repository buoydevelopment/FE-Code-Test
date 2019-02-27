// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Navigation from '../../navigation';
import { bindComponentToNavigation } from '../../navigation/helpers';

import * as Style from '../../stylesheet';

import NavBar from '../../components/nav.bar';
import List from './list';
import Preloader from '../../components/preloader';

import {
  type TCocktails,
} from '../../api/cocktails';

import {
  getAll as getAllCocktails,
  type TDispatchers as TDispatchersCocktails,
} from '../../store/actions/cocktails';

type StateProps = {
  cocktails: TCocktails,
  timestamp: number,
};

type DispatchProps = {
  getAllCocktails: $PropertyType<TDispatchersCocktails, 'getAll'>,
};

type Props = StateProps & DispatchProps;

type State = {
  didLoad: bool,
};

export class Index extends PureComponent<Props, State> {

  state = {
    didLoad: false,
  };

  componentDidMount() {
    this.props.getAllCocktails();
  }

  componentWillReceiveProps(props: Props) {
    if(props.timestamp > this.props.timestamp) {
      this.setState({ didLoad: true });
    }
  }

  render() {
    const {
      cocktails,
    } = this.props;
    const {
      didLoad,
    } = this.state;
    return (
<View style={styles.container}>
  <NavBar
    title="Random drinks 0.1"
  />

  <List
    items={cocktails}
  />

  <Preloader
    show={!didLoad}
  />
</View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: Style.blueColor,
  },
});

import {
  bindActionCreators,
  type Dispatch
} from 'redux';

import {
  connect,
} from 'react-redux';

import {
  type TStore
} from '../../store/reducers';

export const mapStateToProps = ({
  cocktails
}: TStore): StateProps => {
  return {
    // $FlowFixMe
    cocktails: Object.values(cocktails.byId),
    timestamp: cocktails.getAllTimestamp,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => bindActionCreators({
  getAllCocktails,
}, dispatch);

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);

export default bindComponentToNavigation(connectedComponent);

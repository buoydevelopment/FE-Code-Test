// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';

import EventEmitter from 'EventEmitter';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { debounceTime, tap } from 'rxjs/operators';

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
  cocktails: TCocktails,
  didLoad: bool,
  keyword: string,
  needToResetCocktails: bool,
};

export class Index extends PureComponent<Props, State> {

  searchEmitter: EventEmitter = new EventEmitter();
  onSearch$: any = null;

  state = {
    cocktails: [],
    didLoad: false,
    keyword: '',
    needToResetCocktails: false,
  };

  list: any = null;

  onRefList = (elem: any): void => {
    this.list = elem;
  }

  componentDidUpdate(props: Props, state: State) {
    if(
      this.state.keyword != '' &&
      this.state.keyword != state.keyword
    ) {
      const keyword = this.state.keyword.toLowerCase().trim();
      this.setState({
        // use props.cocktails!!
        cocktails: this.props.cocktails.filter(({ brief }) => brief.toLowerCase().includes(keyword)),
      });
    }

    if(
      this.state.needToResetCocktails &&
      !state.needToResetCocktails
    ) {
      this.setState({
        keyword: '',
        cocktails: this.props.cocktails,
        needToResetCocktails: false,
      });
      if(this.list != null) {
        this.list.scrollToTop();
      }
    }
  }

  componentDidMount() {
    this.props.getAllCocktails();

    this.onSearch$ = fromEvent(this.searchEmitter, 'search')
      .pipe(
        debounceTime(500),
        tap((keyword: string) => this.setState({ keyword })),
      )
      .subscribe()
    ;
  }

  componentWillUnmount() {
    this.searchEmitter.removeAllListeners();
    if(this.onSearch$ !== null) {
      this.onSearch$.unsubscribe();
    }
  }

  componentWillReceiveProps(props: Props) {
    if(props.timestamp > this.props.timestamp) {
      this.setState({
        cocktails: props.cocktails,
        didLoad: true,
      });
    }
  }

  onSearch = (text: string): void => {
    this.searchEmitter.emit('search', text);
  }

  onSearchClose = (): void => {
    this.setState({
      needToResetCocktails: true,
    });
  }

  render() {
    const {
      cocktails,
      didLoad,
    } = this.state;
    return (
<SafeAreaView style={styles.container}>
  <NavBar
    title="Random drinks 0.1"
    onSearch={this.onSearch}
    onSearchClose={this.onSearchClose}
  />

  <List
    ref={this.onRefList}
    items={cocktails}
  />

  <Preloader
    show={!didLoad}
  />
</SafeAreaView>
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

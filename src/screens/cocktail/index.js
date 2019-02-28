// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import { bindComponentToNavigation } from '../../navigation/helpers';

import * as Style from '../../stylesheet';

import NavBar from '../../components/nav.bar';
import Preloader from '../../components/preloader';
import Card from './card';

import {
  type TCocktail,
} from '../../api/cocktails';

import {
  get as getCocktail,
  type TDispatchers as TDispatchersCocktails,
} from '../../store/actions/cocktails';

import {
  pop,
  type TDispatchers as TDispatchersNavigation,
} from '../../store/actions/navigation';

type OwnProps = {
  cocktailId: string,
  cocktailBrief: string,
};

type StateProps = {
  cocktail: TCocktail | null,
  timestamp: number,
};

type DispatchProps = {
  getCocktail: $PropertyType<TDispatchersCocktails, 'get'>,
  pop: $PropertyType<TDispatchersNavigation, 'pop'>,
};

type Props = OwnProps & StateProps & DispatchProps;

type State = {
  didLoad: bool,
};

export class Index extends PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      didLoad: props.cocktail != null,
    };  
  }

  componentDidMount() {
    if(!this.state.didLoad) {
      this.props.getCocktail({ id: this.props.cocktailId });
    }
  }
  
  componentWillReceiveProps(props: Props) {
    if(props.timestamp > this.props.timestamp) {
      this.setState({
        didLoad: props.cocktail != null,
      });
    }
  }

  onBack = (): void => {
    this.props.pop();
  }

  render() {
    const {
      cocktailBrief,
      cocktail,
    } = this.props;
    const {
      didLoad,
    } = this.state;
    return (
<ScrollView
  style={styles.container}
  contentContainerStyle={styles.contentContainer}
>
  <NavBar
    title={cocktailBrief}
    onBack={this.onBack}
  />

  {cocktail !== null &&
  <Card
    {...cocktail}
  />
  }

  <Preloader
    show={!didLoad}
  />
</ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Style.blueColor,
  },
  contentContainer: {
    flexGrow: 1,
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

export const mapStateToProps = (
  { cocktails: { fullyLoadedItems, byId, getTimestamp } }: TStore,
  { cocktailId, cocktailBrief }: OwnProps,
  ): OwnProps & StateProps => {
  const item = fullyLoadedItems.includes(cocktailId) && (cocktailId in byId) ? byId[cocktailId] : null;
  return {
    cocktail: item,
    timestamp: getTimestamp,
    cocktailId,
    cocktailBrief,
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => bindActionCreators({
  getCocktail,
  pop,
}, dispatch);

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);

export default bindComponentToNavigation(connectedComponent);

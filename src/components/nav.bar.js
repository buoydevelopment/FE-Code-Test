// @flow

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import * as Animatable from 'react-native-animatable';

import * as Style from '../stylesheet';

type Props = {
  title: string,
  onSearch: (string) => void | void,
  onSearchClose: () => void | void,
};

type State = {
  showSearchInputText: bool,
};

export default class NavBar extends PureComponent<Props, State> {

  state = {
    showSearchInputText: false,
  };

  componentDidUpdate(props: Props, state: State) {
    // search has terminated
    if(
      !this.state.showSearchInputText &&
      state.showSearchInputText &&
      typeof this.props.onSearchClose != 'undefined'
    ) {
      this.props.onSearchClose();
    }
  }

  goBack = (): void => {
  
  }

  onSearchPress = (): void => {
    this.setState({
      showSearchInputText: !this.state.showSearchInputText,
    });
  }

  onSearchChange = (text: string): void => {
    this.props.onSearch(text);
  }

  onSearchSubmit = (): void => {
  }

  render() {
    const {
      title,
      onSearch,
    } = this.props;
    const {
      showSearchInputText,
    } = this.state;
    let showBackButton = false;
    return (
<View style={styles.container}>
  {showBackButton &&
  <TouchableOpacity
    onPress={this.goBack}
    style={styles.backButton}
  >
    <Icon
      name="angle-left"
      size={25}
      color={Style.whiteColor}
    />
  </TouchableOpacity>
  }
  {!showBackButton &&
  <TouchableOpacity
    style={styles.dummyButton}
  />
  }

  <Text style={styles.text}>
    {title}
  </Text>
  {showSearchInputText &&
  <Animatable.View
    animation="fadeInRight"
    duration={200}
    style={styles.searchInputTextContainer}
  >
    <TextInput
      style={styles.searchInputText}
      autoFocus
      placeholder="Search cocktails..."
      returnKeyType="done"
      onChangeText={this.onSearchChange}
      onSubmitEditing={this.onSearchSubmit}
    />
  </Animatable.View>
  }

  {typeof onSearch == 'undefined' &&
  <TouchableOpacity
    style={styles.dummyButton}
  />
  }
  {typeof onSearch != 'undefined' &&
  <TouchableOpacity
    style={styles.dummyButton}
    onPress={this.onSearchPress}
  >
    <Icon
      name={!showSearchInputText ? "search" : "times"}
      size={15}
      color={Style.whiteColor}
    />
  </TouchableOpacity>
  }

</View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Style.blueColor,
    paddingTop: Platform.OS === 'ios' ? 20 : 10,
    paddingBottom: Platform.OS === 'ios' ? 10 : 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 0,
    flexDirection: 'row',
  },
  text: {
    fontSize: Style.fontSize,
    color: Style.whiteColor,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 5,
  },
  backButton: {
    width: 20,
    opacity: 1,
  },
  dummyButton: {
    opacity: 1,
    width: 20,
  },
  searchInputTextContainer: {
    position: 'absolute',
    top: Platform.OS == 'ios' ? 19 : 5,
    right: 35,
    width: 250,
  },
  searchInputText: {
    backgroundColor: Style.whiteColor,
    fontSize: Style.fontSize,
    color: Style.blackColor,
    paddingVertical: Platform.OS == 'ios' ? 5 : 3,
    paddingLeft: 3,
    borderRadius: 5,
  },
});

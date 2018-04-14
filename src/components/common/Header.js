import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Back from './Back';
import Search from './Search';

export default class Header extends Component {
  render() {
    const { backButtonStyles, headerStyles, textStyles } = styles;

    return (
      <View style={headerStyles}>
        {
          this.props.showBack ?
            <View style={backButtonStyles}>
              <Back />
            </View> :
            null
        }
        <Text style={textStyles}>{this.props.title}</Text>
        {
          this.props.showSearch ?
            <View style={{ alignSelf: 'center', flex: 0.6, marginLeft: 20 }}>
              <Search />
            </View> :
            null
        }
      </View>
    )
  };
};

const styles = {
  headerStyles: {
    flexDirection: 'row',
    height: 80,
    justifyContent: 'center',
    backgroundColor: '#00c0d4',
  },
  textStyles: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '300'
  },
  backButtonStyles: {
    flex: 0.2,
    alignSelf: 'center',
  }
};

import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, onChangeText, placeholder, secureTextEntry, keyboardType, autoCapitalize, returnKeyType }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoFocus
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        autoCapitalize='none'
        onChangeText={onChangeText}
        placeholderTextColor={'grey'}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: 'white',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 25,
    flex: 2,
    height: 60
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    color: 'white'
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };

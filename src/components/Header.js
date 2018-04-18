import React from 'react';
import { TextInput, View, TouchableWithoutFeedback, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';


const Header = (props) => {
  console.log("props", props);
  const { showBack = false, title } = props;
  const { viewStyle } = styles;
  console.log("showBack", showBack);
  return (
    <View style={viewStyle}>
      <View style={{ position:'absolute', left:0, alignSelf:'center' }}>
        {showBack ?
          <TouchableWithoutFeedback
            onPress={() => Actions.pop()}>
            <Icon name="md-arrow-back" size={30} color='#fff' style={{ margin: 20 }} />
          </TouchableWithoutFeedback> : null}
      </View>
      <View style={{
        alignSelf: 'center',
        flex: 1
      }}>
        <Text style={styles.textStyle}>
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    flexDirection: 'row',
    height: 50,
    elevation: 2,
    justifyContent: 'center',
    alignContent: 'center'

  },
  textStyle: {
    flex: 1,
    fontSize: 20,
    color: '#fff',
    fontWeight: '300',
    alignSelf: 'center',
    paddingLeft: 20,
    lineHeight: 50
  }
};

export default Header;

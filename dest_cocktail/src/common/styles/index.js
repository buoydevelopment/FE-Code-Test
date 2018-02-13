import {StyleSheet, Platform} from 'react-native'

const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#2bedff',
    alignItems: 'center'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    marginHorizontal: 10,

    ...Platform.select({
        ios: {
            marginTop: 30
	}
    })
  },

  headerText: {
    color: '#fff',
    flex: 1,
    textAlign: 'center',
    fontSize: 18
  },

  headerBtn: {
    width: 25
  }

});

export default styles;
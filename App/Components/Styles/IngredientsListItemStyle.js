import { StyleSheet } from 'react-native'
import { Metrics, Colors  } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    borderRadius:1,
    marginBottom:10,
    padding:Metrics.basePadding,
    justifyContent:'space-between'
  },
  text:{
    color:Colors.text,
    fontWeight:'800',
  }
})

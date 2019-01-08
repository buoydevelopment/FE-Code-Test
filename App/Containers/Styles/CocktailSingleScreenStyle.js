import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors  } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.silver,
    padding:0,
  },
  row: {
    flex: 1,
    backgroundColor: Colors.fire,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center'
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.snow
  },
  listContent: {
    margin: Metrics.baseMargin,
    elevation:5,
    padding:Metrics.basePadding,
    backgroundColor:Colors.snow
  },
  hero:{
    width:Metrics.screenWidth,
    height:200,
    backgroundColor: Colors.background,
    position:'relative',
    marginBottom:50,
  },
  cocktailImage:{
    height:150,
    width:150,
    borderRadius:75,
    borderWidth:3,
    borderColor:Colors.silver,
    position:'absolute',
    left:Metrics.screenWidth/2 - 75,
    bottom:-30,
  },
  infoContainer:{
    flex:1,
    padding:Metrics.basePadding,
    position:'relative'
  },
  sectionTitle:{
    backgroundColor:Colors.silver,
    padding:Metrics.basePadding,
    top:-15,
    color:Colors.text,
    borderBottomWidth:3,
    borderBottomColor:Colors.background,
  }

});

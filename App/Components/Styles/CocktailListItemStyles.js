import { Metrics, Colors, Fonts } from '../../Themes'

export default {
  button:{
    alignItems:'center',
    backgroundColor: Colors.silver,
    borderRadius:10,
    elevation:5,
    flexDirection:'row',
    height: Metrics.listItemWithThumbnailHeight,
    justifyContent:'space-between',
    padding: Metrics.basePadding,
    marginRight:20,
    position:'relative'
  },
  image:{
    height: 60,
    width: 60,
    borderRadius:20,
  },
  imageContainer:{
    alignItems:'center',
    backgroundColor:Colors.silver,
    borderRadius:20,
    elevation:8,
    height: 100,
    justifyContent:'center',
    position:'absolute',
    width: 100,
    top:10,
    right:-20,
  },
  text: {
    ...Fonts.style.h5,
    color: Colors.text,
    maxWidth:150,
    fontWeight:'900'
  },
}

// import spacing from '../../common/spacing/styles';
import { responsiveSize } from '../../../utils/dimensions';
import colors from '../../../theme/Colors';

export default {
  cocktail: {
    marginTop: responsiveSize(15),
    width: responsiveSize(330),
    height: responsiveSize(150),
    backgroundColor: colors.white,
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: colors.opacityBackground,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.16,
    shadowRadius: 4,
    borderRadius: responsiveSize(5),
  },
  textTitle: {
    textAlign: 'left',
    marginTop: responsiveSize(30),
    marginLeft: responsiveSize(15),
  },
  cocktailPhoto: {
    flex: 0.45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveSize(5),
  },
  info: {
    height: responsiveSize(130),
    marginLeft: responsiveSize(15),
    flex: 0.55,
  },
  image: {
    width: responsiveSize(120),
    height: responsiveSize(120),
    borderRadius: responsiveSize(5),
  },
};

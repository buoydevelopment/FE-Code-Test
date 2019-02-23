import colors from '../../../theme/Colors';
import { responsiveSize, iPhoneSE } from '../../../utils/dimensions';

const styles = {
  inputContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: responsiveSize(20),
    top: responsiveSize(20),
  },
  defaultInput: {
    paddingHorizontal: responsiveSize(20),
    height: responsiveSize(50),
    backgroundColor: colors.snow,
    borderRadius: 100 / 2,
    marginBottom: iPhoneSE() ? responsiveSize(10) : responsiveSize(12),
  },
  label: {
    position: 'absolute',
    top: responsiveSize(8),
    left: responsiveSize(20),
    opacity: 0.8,
  },
};

export default styles;

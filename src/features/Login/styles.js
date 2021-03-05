import { Dimensions, StyleSheet } from 'react-native';
import color from 'src/config/color';
import { FONT_SIZE } from 'src/config/typography';
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    paddingHorizontal: 30,
  },
  imageLogo: {
    flex: 1.3,
    marginTop: height / 12,
    alignSelf: 'center',
  },
  authForm: {
    flex: 2,
  },
  sloganBlock: {
    flex: 1,
    alignItems: 'center',
  },
  bigTitle: {
    fontSize: FONT_SIZE.EXTRA_LARGE,
    color: color.blueLevel1,
    fontWeight: '500',
    lineHeight: 47,
  },
  secondTitle: {
    fontSize: FONT_SIZE.BIG,
    color: color.placeHolder,
  },
  loginForm: {
    flex: 3,
  },
  forgetPassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forgotPasswordText: {
    fontSize: FONT_SIZE.SMALL,
    color: 'rgba(0, 0, 0, 0.8)',
    lineHeight: 17,
    fontWeight: '300',
  },
  createNewAccountText: {
    fontSize: FONT_SIZE.SMALL,
    color: color.blueLevel2,
    lineHeight: 17,
    fontWeight: '500',
  },
});
export default styles;

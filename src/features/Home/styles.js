import { Dimensions, StyleSheet } from 'react-native';
import color from 'src/config/color';
import { FONT_SIZE } from 'src/config/typography';
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: color.background,
    paddingHorizontal: 30,
  },
  header: {
    flexDirection: 'row',
    marginTop: height / 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 50,
  },
  locationSelect: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationSelectText: {
    fontSize: FONT_SIZE.EXTRA_SMALL,
    color: color.blueLevel2,
    paddingHorizontal: 10,
  },
  notiAndSetting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default styles;

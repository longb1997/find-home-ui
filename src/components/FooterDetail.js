import React from 'react';
import { Pressable } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import color from 'src/config/color';
import { FONT_SIZE } from 'src/config/typography';
import Row from './common/Row';

const FooterDetail = () => {
  return (
    <Row containerStyle={styles.footerContainer}>
      <Text style={styles.priceText}>$1500</Text>
      <Pressable style={styles.reservedButton}>
        <Text style={styles.reservedText}>Reserved Now!</Text>
      </Pressable>
    </Row>
  );
};

export default FooterDetail;

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: 'rgb(255,255,255)',
    position: 'absolute',
    bottom: 0,
    width: wp('100%'),
    height: hp('8%'),
    borderRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  priceText: {
    fontSize: FONT_SIZE.BIG,
    color: color.blueLevel1,
  },
  reservedButton: {
    backgroundColor: '#46D0D9',
    borderRadius: 10,
  },
  reservedText: {
    color: '#FFFFFF',
    fontSize: FONT_SIZE.MEDIUM,
    lineHeight: 19,
    textAlign: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
});

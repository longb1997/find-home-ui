import React from 'react';
import { ImageBackground } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import DetailHeader from 'src/components/DetailHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Text } from 'react-native';
import { Image } from 'react-native';
import images from '@resources/icons';
import { FONT_SIZE } from 'src/config/typography';
import color from 'src/config/color';

const IMAGE_URL = {
  uri: 'https://static01.nyt.com/images/2016/07/11/arts/11PBS/11PBS-superJumbo.jpg',
};

const DetailPost = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={IMAGE_URL} style={styles.backgroundImage}>
        <DetailHeader />
      </ImageBackground>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <View style={styles.house}>
            <View style={styles.infoSection}>
              <View style={styles.locationSelect}>
                <Image source={images.Location} />
                <Text style={styles.locationSelectText}>Los angeles,CA</Text>
              </View>
              <Text style={styles.bigTitle}>Special House mix </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailPost;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: wp('100%'),
    height: hp('70%'),
  },
  contentContainer: {
    backgroundColor: '#FFF',
    height: hp('100%'),
    top: -hp('25%'),
    borderRadius: 32,
  },
  content: {
    paddingHorizontal: 26,
    paddingVertical: 32,
  },
  house: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationSelect: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationSelectText: {
    fontSize: FONT_SIZE.EXTRA_SMALL,
    color: color.blueLevel2,
    paddingHorizontal: 8,
  },
  bigTitle: {
    fontSize: FONT_SIZE.LARGE,
    color: color.blueLevel1,
    fontWeight: '500',
    letterSpacing: -0.3,
    lineHeight: 31,
  },
});

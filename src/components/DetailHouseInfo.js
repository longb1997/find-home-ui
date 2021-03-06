import images from '@resources/icons';
import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import color from 'src/config/color';
import { FONT_SIZE } from 'src/config/typography';
import Row from './common/Row';

const DetailHouseInfo = ({ amount_rooms, avatar_url }) => {
  return (
    <Row containerStyle={styles.rowContainer}>
      <View style={styles.containerInfo}>
        <Row>
          <Image source={images.Location} />
          <Text style={styles.locationSelectText}>Los angeles,CA</Text>
        </Row>
        <Text style={styles.bigTitle}>Special House mix </Text>
        <View style={styles.features}>
          <Text style={styles.featuresText}>High-speed-wifi</Text>
          <Image source={images.dot} style={styles.dot} />
          <Text style={styles.featuresText}>Deskspace</Text>
          <Image source={images.dot} style={styles.dot} />
          <Text style={styles.featuresText}>Safe Location</Text>
        </View>
        <Row containerStyle={styles.amount}>
          {amount_rooms.map(({ id, icon, amount }) => {
            return (
              <Row containerStyle={{ paddingRight: 43 }} key={id}>
                <Image source={icon} />
                <Text style={styles.amountText}>{amount}</Text>
              </Row>
            );
          })}
        </Row>
      </View>
      <Image source={avatar_url} style={styles.avatar} />
    </Row>
  );
};

export default DetailHouseInfo;

const styles = StyleSheet.create({
  rowContainer: {
    paddingHorizontal: 26,
    alignItems: 'flex-start',
  },
  containerInfo: {
    flex: 1,
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
    paddingTop: 8,
  },
  features: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
  },
  featuresText: {
    color: 'rgba(20, 54, 86, 0.4)',
    fontSize: FONT_SIZE.EXTRA_SMALL,
  },
  dot: {
    marginHorizontal: 4,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderColor: '#000',
    borderWidth: 0.1,
    right: 0,
  },
  amount: {
    paddingTop: 8,
  },
  amountText: {
    fontSize: FONT_SIZE.BIG,
    color: '#8a9bab',
    lineHeight: 23,
    marginLeft: 8,
  },
});

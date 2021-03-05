import images from '@resources/icons';
import React from 'react';
import { Pressable } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { FONT_SIZE } from 'src/config/typography';

const DetailHeader = ({ status = 'Available' }) => {
  return (
    <View style={styles.header}>
      <Pressable style={styles.back}>
        <Image source={images.back_arrow} />
      </Pressable>
      <View style={styles.status}>
        <Text style={styles.statusText}>{status}</Text>
      </View>
      <Pressable style={styles.back}>
        <Image source={images.heart} />
      </Pressable>
    </View>
  );
};

export default DetailHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    top: 81,
  },
  back: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    width: 119,
    height: 31,
    borderRadius: 50,
    backgroundColor: '#6CC775',
    justifyContent: 'center',
  },
  statusText: {
    fontSize: FONT_SIZE.SMALL,
    letterSpacing: -0.3,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

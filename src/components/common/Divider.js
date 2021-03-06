import React from 'react';
import { StyleSheet, View } from 'react-native';

const Divider = ({ dividerStyle }) => {
  return <View style={[styles.divider, dividerStyle]}></View>;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'red',
  },
});

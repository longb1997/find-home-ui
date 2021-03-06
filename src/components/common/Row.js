import React from 'react';
import { StyleSheet, View } from 'react-native';

const Row = ({ children, containerStyle, ...rest }) => {
  return (
    <View style={[styles.containerRow, containerStyle]} {...rest}>
      {children}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

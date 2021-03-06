import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';

const DetailModules = ({ id = 1, icon, title, selectedId, onPress }) => {
  const tintColor = id === selectedId ? '#46D0D9' : '#D3DBE2';
  return (
    <Pressable onPress={onPress} key={id} style={styles.moduleContainer}>
      <Image source={icon} style={{ width: 30, height: 30, resizeMode: 'stretch', tintColor }} />
      <Text style={{ fontSize: 12, lineHeight: 14, color: tintColor }}>{title}</Text>
    </Pressable>
  );
};

export default DetailModules;

const styles = StyleSheet.create({
  moduleContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
});

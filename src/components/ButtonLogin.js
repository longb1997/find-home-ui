import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import color from 'src/config/color';
import Typography from 'src/config/typography';

const ButtonLogin = ({ label, ...rest }) => {
  return (
    <Pressable style={styles.container} {...rest}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default ButtonLogin;

const styles = StyleSheet.create({
  container: {
    marginVertical: 36,
    height: 55,
    borderRadius: 10,
    backgroundColor: color.blueLevel2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: Typography.FONT_SIZE.SMALL,
    lineHeight: 17,
  },
});

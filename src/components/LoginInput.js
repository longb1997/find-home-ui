import React from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import color from 'src/config/color';
import Typography from 'src/config/typography';

const LoginInput = ({ label, ...rest }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput style={styles.inputContainer} {...rest} />
    </View>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
  },
  labelText: {
    color: color.blueLevel2,
    fontSize: Typography.FONT_SIZE.SMALL,
    paddingBottom: 10,
  },
  inputContainer: {
    backgroundColor: '#FFF',
    height: 46,
    maxWidth: '100%',
    borderRadius: 10,
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowColor: 'rgba(29, 40, 142, 0.07)',
    shadowOffset: { height: 0, width: 0 },
    paddingHorizontal: 35,
  },
});

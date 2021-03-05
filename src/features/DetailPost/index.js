import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

const DetailPost = () => {
  return (
    <View style={styles.container}>
      <Text>DETAIL POST</Text>
    </View>
  );
};

export default DetailPost;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

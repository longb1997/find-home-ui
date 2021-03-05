import React from 'react';
import { Pressable } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { FONT_SIZE } from 'src/config/typography';

const MenuItem = ({ id = 1, icon, title, selectedId, onPress }) => {
  // const value = React.useRef(new Animated.Value(100));

  // const animatedIncrease = () => {
  //   const animation = Animated.timing(value.current, {
  //     toValue: 100,
  //   });
  //   animation.start();
  // };
  // const animatedDecrease = () => {
  //   const animation = Animated.timing(value.current, {
  //     toValue: 60,
  //   });
  //   animation.start();
  // };
  const backgroundColor = id === selectedId ? '#46D0D9' : '#FFFFFF';
  const tintColor = id === selectedId ? '#FFFFFF' : '#D3DBE2';
  return (
    <Pressable onPress={onPress} style={[styles.container, { backgroundColor }]}>
      <View style={[styles.itemContainer]}>
        <Image source={icon} style={{ tintColor }} />
        {backgroundColor === '#46D0D9' && <Text style={styles.title}>{title}</Text>}
      </View>
    </Pressable>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#46D0D9',
    borderRadius: 10,
    marginRight: 16,
  },
  itemContainer: {
    width: 60,
    height: 60,
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 22,
    marginBottom: 16,
  },
  title: {
    paddingTop: 16,
    fontSize: FONT_SIZE.MEDIUM,
    color: '#FFF',
  },
});

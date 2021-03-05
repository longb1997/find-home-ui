import images from '@resources/icons';
import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { FONT_SIZE } from 'src/config/typography';

const RoomNumber = () => {
  const listIcon = [
    { id: 1, numberOfRoom: 2, icon: images.bed },
    { id: 2, numberOfRoom: 1, icon: images.bath },
    { id: 3, numberOfRoom: 1, icon: images.plate },
  ];

  const RoomNumberWithIcon = ({ numberOfRoom, icon }) => {
    return (
      <View style={styles.containerItem}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.number}>{numberOfRoom}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {listIcon.map((item) => (
        <RoomNumberWithIcon key={item.id} {...item} />
      ))}
    </View>
  );
};

export default RoomNumber;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
  },
  icon: {
    marginRight: 6,
  },
  number: {
    fontSize: FONT_SIZE.EXTRA_SMALL,
  },
});

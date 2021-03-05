import images from '@resources/icons';
import React from 'react';
import { Image, Pressable, Text, View, Dimensions, StyleSheet } from 'react-native';
import color from 'src/config/color';
import { FONT_SIZE } from 'src/config/typography';
const { height } = Dimensions.get('window');

const HeadingHome = ({ avatar_url }) => {
  return (
    <View style={styles.header}>
      <Pressable style={styles.avatar}>
        <Image source={{ uri: avatar_url }} style={styles.avatar} />
      </Pressable>
      <Pressable style={styles.locationSelect}>
        <Image source={images.Location} />
        <Text style={styles.locationSelectText}>Los angeles,CA</Text>
        <Image source={images.downarrow} />
      </Pressable>
      <View style={styles.notiAndSetting}>
        <Pressable style={{ paddingRight: 30 }}>
          <Image source={images.Noti} />
        </Pressable>
        <Pressable>
          <Image source={images.settings} />
        </Pressable>
      </View>
    </View>
  );
};

export default HeadingHome;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: height / 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  locationSelect: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationSelectText: {
    fontSize: FONT_SIZE.EXTRA_SMALL,
    color: color.blueLevel2,
    paddingHorizontal: 10,
  },
  notiAndSetting: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

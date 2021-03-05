import images from '@resources/icons';
import React from 'react';
import { Image } from 'react-native';
import { Pressable } from 'react-native';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import color from 'src/config/color';
import { FONT_SIZE } from 'src/config/typography';
import RoomNumber from './RoomNumber';
import StarRating from './StarRating';

const avatar_url = 'https://pbs.twimg.com/media/EfMPuIFUcAAUTcz.jpg';

const ProductItem = ({ onPress }) => {
  const IMAGE_URL = 'https://static01.nyt.com/images/2016/07/11/arts/11PBS/11PBS-superJumbo.jpg';

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <ImageBackground
        source={{ uri: IMAGE_URL }}
        style={styles.background}
        imageStyle={{ borderRadius: 15 }}
        resizeMode={'cover'}>
        <View style={styles.location}>
          <Image source={images.Location} style={{ marginLeft: 12 }} />
          <Text style={styles.locationText}>Los angeles, CA</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <View style={{ flex: 2 }}>
              <Text style={styles.contentTitle}>Special House Mix</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 6 }}>
                <Image source={{ uri: avatar_url }} style={styles.contentAvatar} />
                <Text style={{ fontSize: FONT_SIZE.EXTRA_SMALL }}>Timmy Broke</Text>
              </View>
              <StarRating rating={3} />
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <Text style={styles.contentMoney}>$1500 usd</Text>
              <RoomNumber />
            </View>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: 361,
    height: 357,
  },
  location: {
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    left: 32,
    top: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    paddingVertical: 6,
    paddingRight: 12,
    paddingLeft: 6,
    textAlign: 'center',
    color: color.blueLevel1,
  },
  contentContainer: {
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderRadius: 15,
  },
  content: {
    paddingHorizontal: 28,
    paddingVertical: 16,
    flexDirection: 'row',
    // alignItems: 'center',
  },
  contentTitle: {
    fontSize: FONT_SIZE.BIG,
    color: color.blueLevel1,
    fontWeight: '400',
  },
  contentAvatar: {
    width: 22,
    height: 22,
    borderRadius: 11,
    marginRight: 8,
  },
  contentMoney: {
    fontSize: FONT_SIZE.BIG,
    color: color.blueLevel1,
    fontWeight: '600',
    marginBottom: 12,
  },
});

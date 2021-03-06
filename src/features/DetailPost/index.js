import images from '@resources/icons';
import React, { useState } from 'react';
import { FlatList, ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Divider from 'src/components/common/Divider';
import DescriptionDetail from 'src/components/DescriptionDetail';
import DetailHeader from 'src/components/DetailHeader';
import DetailHouseInfo from 'src/components/DetailHouseInfo';
import DetailModules from 'src/components/DetailModules';
import FooterDetail from 'src/components/FooterDetail';

const IMAGE_URL = {
  uri: 'https://static01.nyt.com/images/2016/07/11/arts/11PBS/11PBS-superJumbo.jpg',
};

const avatar_url = { uri: 'https://avatars0.githubusercontent.com/u/48817520?v=4' };

let amount_rooms = [
  { id: 1, icon: images.big_bed, amount: 2 },
  { id: 2, icon: images.big_bath, amount: 1 },
  { id: 3, icon: images.big_dish, amount: 1 },
];

let modules = [
  { id: 1, icon: images.infomation, title: 'Information' },
  { id: 2, icon: images.comment, title: 'Comments' },
  { id: 3, icon: images.offer, title: 'Offers' },
  { id: 4, icon: images.shared, title: 'Shared' },
];
const DetailPost = () => {
  const [selectedModule, setSelectedModule] = useState(1);
  return (
    <View style={styles.container}>
      <ImageBackground source={IMAGE_URL} style={styles.backgroundImage}>
        <DetailHeader />
      </ImageBackground>
      <View style={styles.contentContainer}>
        <ScrollView>
          <View style={styles.content}>
            <DetailHouseInfo avatar_url={avatar_url} amount_rooms={amount_rooms} />
            <View style={styles.moduleContainer}>
              <Divider dividerStyle={{ height: 2, backgroundColor: 'rgba(20, 54, 86, 0.1)' }} />
              <FlatList
                horizontal={true}
                data={modules}
                renderItem={({ item }) => {
                  return (
                    <DetailModules
                      {...item}
                      selectedId={selectedModule}
                      onPress={() => setSelectedModule(item.id)}
                    />
                  );
                }}
                keyExtractor={(item) => {
                  return item.id.toString();
                }}
                contentContainerStyle={{
                  flex: 1,
                  justifyContent: 'space-evenly',
                }}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
              />
              <Divider dividerStyle={{ height: 2, backgroundColor: 'rgba(20, 54, 86, 0.1)' }} />
            </View>
            <DescriptionDetail />
          </View>
        </ScrollView>
      </View>
      <FooterDetail />
    </View>
  );
};

export default DetailPost;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: wp('100%'),
    height: hp('70%'),
  },
  content: {
    paddingVertical: 32,
  },
  contentContainer: {
    backgroundColor: '#F8FBFF',
    height: hp('100%'),
    top: -hp('25%'),
    borderRadius: 32,
  },
  moduleContainer: {
    paddingVertical: 16,
  },
});

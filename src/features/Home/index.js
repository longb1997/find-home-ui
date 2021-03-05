import { useNavigation } from '@react-navigation/native';
import images from '@resources/icons';
import React from 'react';
import { Text } from 'react-native';
import { View, FlatList } from 'react-native';
import HeadingHome from 'src/components/HeadingHome';
import MenuItem from 'src/components/MenuItem';
import ProductItem from 'src/components/ProductItem';
import SearchBar from 'src/components/SearchBar';
import { FONT_SIZE } from 'src/config/typography';
import styles from './styles';

const avatar_url = 'https://avatars0.githubusercontent.com/u/48817520?v=4';

const HomeScreen = () => {
  const navigation = useNavigation();
  let settings = [
    { id: 1, icon: images.Home, title: 'Home' },
    { id: 2, icon: images.Home2, title: 'Home2' },
    { id: 3, icon: images.Key, title: 'Key' },
    { id: 4, icon: images.setting2, title: 'Settings' },
  ];

  const [selectedId, setSelectedId] = React.useState(1);
  const navigateToDetail = () => navigation.navigate('detail');
  return (
    <View style={styles.container}>
      <HeadingHome avatar_url={avatar_url} />
      <View style={{ paddingVertical: 30 }}>
        <Text style={{ fontSize: FONT_SIZE.BIG, color: '#B3B3B3' }}>Hello Eddie !</Text>
        <Text style={{ fontSize: FONT_SIZE.BIG, color: '#143656' }}>
          Start looking for your house
        </Text>
      </View>
      <SearchBar />
      <View style={{ flexDirection: 'row', marginVertical: 22 }}>
        <FlatList
          horizontal={true}
          data={settings}
          renderItem={({ item }) => {
            return (
              <MenuItem {...item} selectedId={selectedId} onPress={() => setSelectedId(item.id)} />
            );
          }}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <ProductItem onPress={navigateToDetail} />
    </View>
  );
};

export default HomeScreen;

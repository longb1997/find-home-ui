import images from '@resources/icons';
import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import color from 'src/config/color';

const SearchBar = () => {
  const [value, onChangeText] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Image source={images.searchHome} />
        <TextInput
          value={value}
          onChangeText={(text) => onChangeText(text)}
          style={styles.input}
          placeholder="What are you looking for?"
        />
        <Image source={images.settingSearch} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.background,
    borderRadius: 10,
  },
  searchBarContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 15,
    flex: 1,
  },
});

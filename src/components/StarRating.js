import images from '@resources/icons';
import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, View } from 'react-native';

const StarRating = ({ rating = 1 }) => {
  let stars = [];

  for (let index = 1; index <= 5; index++) {
    // Set the path to filled stars
    let path = images.StarFill;
    // If ratings is lower, set the path to unfilled stars
    if (index > rating) {
      path = images.StarUnfill;
    }
    // Push the Image tag in the stars array
    stars.push(<Image key={index} style={styles.image} source={path} />);
  }
  return <View style={styles.container}>{stars}</View>;
};

export default StarRating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

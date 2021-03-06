import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import color from 'src/config/color';
import { FONT_SIZE } from 'src/config/typography';

const DescriptionDetail = () => {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionTitleText}>Description</Text>
      <Text style={styles.descriptionText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus condimentum nulla diam proin
        quis commodo malesuada. Dolor morbi egestas consectetur egestas aliquam tellus. Accumsan
        tristique consequat nec cras commodo et orci ipsum, convallis. Lectus nibh ut eget quis quis
        praesent pellentesque. Molestie a id potenti vivamus blandit aliquet iaculis sed. Amet ut
        rutrum mauris gravida pellentesque eget in in potenti.
      </Text>
    </View>
  );
};

export default DescriptionDetail;

const styles = StyleSheet.create({
  descriptionContainer: {
    paddingHorizontal: 26,
  },
  descriptionTitleText: {
    fontSize: FONT_SIZE.BIG,
    color: color.blueLevel1,
    lineHeight: 31,
    paddingBottom: 10,
  },
  descriptionText: {
    fontSize: FONT_SIZE.EXTRA_SMALL,
    color: 'rgba(0,0,0,0.5)',
    lineHeight: 14,
  },
});

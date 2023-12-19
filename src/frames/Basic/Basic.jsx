import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';

import styles from './Basic_style';

const Basic = ({image, exifData}) => {
  const aspectRatio = exifData.PixelWidth / exifData.PixelHeight;
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{uri: image.uri}}
        style={[styles.image, {aspectRatio: aspectRatio}]}
      />
      <View style={styles.exif_container}>
        <Text style={styles.exif_container_text}>
          {exifData.PixelWidth}x{exifData.PixelHeight}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Basic;

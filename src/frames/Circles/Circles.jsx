import {View, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

import styles from './Circles_style';

const Circles = ({image, exifData}) => {
  // const aspectRatio = exifData.PixelWidth / exifData.PixelHeight;
  const [logo, setLogo] = useState(null);
  return (
    <View>
      {/* <Image
        source={{uri: image.uri}}
        style={[styles.image, {aspectRatio: aspectRatio}]}
      /> */}
    </View>
  );
};

export default Circles;

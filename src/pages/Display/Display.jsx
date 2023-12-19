import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

import Basic from '../../frames/Basic/Basic';

const Display = ({route}) => {
  const {image, exifData} = route.params;
  console.log('====================================');
  console.log('image', image);
  console.log('exifData', exifData);
  console.log('====================================');
  return (
    <View>
      <Basic image={image} exifData={exifData} />
      {/* <Text>{image}</Text> */}
    </View>
  );
};

export default Display;

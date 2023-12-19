import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ScrollViewBase,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import Basic from '../../frames/Basic/Basic';
import Frame from '../Frame/Frame';

import styles from './Display.style';

const Display = ({route, navigation}) => {
  const {image, exifData} = route.params;
  const [frame, setFrame] = useState(null);
  const [show, setShow] = useState(false);
  console.log('====================================');
  console.log('image', image);
  console.log('exifData', exifData);
  console.log('====================================');

  //   const handlePress = () => {

  //   };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setFrame('Basic');
          setShow(true);
        }}>
        <Basic image={image} exifData={exifData} />
      </TouchableOpacity>
      <Frame
        visible={show}
        frame={frame}
        image={image}
        exifData={exifData}
        setShow={setShow}
      />
      {/* <Text>{image}</Text> */}
    </View>
  );
};

export default Display;

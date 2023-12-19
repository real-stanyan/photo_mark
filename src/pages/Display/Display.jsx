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
import Circles from '../../frames/Circles/Circles';
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

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <TouchableOpacity
        onPress={() => {
          setFrame('Basic');
          setShow(true);
        }}>
        <Basic image={image} exifData={exifData} />
      </TouchableOpacity>
      <Circles image={image} exifData={exifData} />
      <Frame
        visible={show}
        frame={frame}
        image={image}
        exifData={exifData}
        setShow={setShow}
      />
      {/* <Text>{image}</Text> */}
    </ScrollView>
  );
};

export default Display;

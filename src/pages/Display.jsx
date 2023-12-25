// import from React
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useState, useEffect} from 'react';

// import Frames
import Basic from '../frames/Basic';

// import from Stores
import useExif from '../stores/useExif';

// Window Size
const {width, height} = Dimensions.get('window');

// CSS
const styles = StyleSheet.create({
  container: {
    width,
    padding: width * 0.05,
  },
});
// COMPONENT
const Display = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Basic />
    </ScrollView>
  );
};

export default Display;

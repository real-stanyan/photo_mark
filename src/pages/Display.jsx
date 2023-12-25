// import from React
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useState, useEffect} from 'react';

// import from Stores
import useExif from '../stores/useExif';

// Window Size
const {width, height} = Dimensions.get('window');

// CSS
const styles = StyleSheet.create({});
// COMPONENT
const Display = ({navigation}) => {
  const {exif, width, height, model, brand} = useExif();

  console.log('Display_exif: ', exif);
  console.log('Display_width: ', width);
  console.log('Display_height: ', height);
  console.log('Display_model: ', model);
  console.log('Display_brand: ', brand);

  return (
    <View>
      <Text>Display</Text>
    </View>
  );
};

export default Display;

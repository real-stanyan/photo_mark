import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {useState, useEffect} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import Exif from 'react-native-exif';

import styles from './Main_style';

const Main = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState(null);
  const selectImage = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, response => {
      setImage(response.assets[0]);
    });
  };

  useEffect(() => {
    const processImage = async () => {
      if (image) {
        try {
          const exif = await Exif.getExif(image.uri);
          setImageData(exif.exif);

          // 由于setState操作是异步的，直接在这里调用navigate可能仍然在state更新之前执行
          // 可以选择在这里直接使用exif.exif，或者使用其他方式来确保state已更新
          navigation.navigate('Display', {image: image, exifData: exif.exif});
        } catch (error) {
          console.error(error);
        }
      }
    };
    processImage();
  }, [image, navigation]);

  console.log('====================================');
  console.log('EXIF', imageData);
  console.log('====================================');
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.upload_btn} onPress={selectImage}>
        <Text style={styles.upload_btn_text}>upload your photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;

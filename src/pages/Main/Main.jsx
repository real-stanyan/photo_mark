import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import React from 'react';

import {useState, useEffect, useRef} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import Exif from 'react-native-exif';

import styles from './Main_style';

const Main = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [init, setInit] = useState(true);

  const fadeAnim = useRef(new Animated.Value(1)).current;

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
    // 如果 init 为 true，则开始淡出动画
    if (init) {
      Animated.timing(fadeAnim, {
        toValue: 0, // 目标透明度为 0
        duration: 3000, // 动画持续时间
        useNativeDriver: true, // 启用原生驱动器
      }).start(() => setInit(false)); // 动画完成后更新 init 状态
    }
  }, [init, fadeAnim]);

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
    <>
      <View style={styles.container}>
        {init ? (
          <Animated.View
            style={[
              styles.logo_container,
              {opacity: fadeAnim}, // 应用动画透明度
            ]}>
            <Text>Developed By</Text>
            <Image
              source={require('../../logos/redroom_logo.png')}
              style={styles.init_img}
            />
          </Animated.View>
        ) : (
          <TouchableOpacity style={styles.upload_btn} onPress={selectImage}>
            <Text style={styles.upload_btn_text}>upload your photo</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default Main;

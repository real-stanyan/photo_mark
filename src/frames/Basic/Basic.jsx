import {View, Text, Image, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';

import getLogo from '../../utils/logo';
import LogoDatabase from '../../logos/logo_database';

import styles from './Basic_style';

const Basic = ({image, exifData}) => {
  const aspectRatio = exifData.PixelWidth / exifData.PixelHeight;
  const [logo, setLogo] = useState(null);
  const [LensModelCount, setLensModelCount] = useState(0);

  useEffect(() => {
    const ModelLogo = getLogo(exifData['{TIFF}'].Make);
    console.log('====================================');
    console.log('getLogo', ModelLogo);
    console.log('====================================');
    setLogo(ModelLogo);

    //自适应
    if (exifData['{Exif}'].LensModel) {
      const LensModelCount = exifData['{Exif}'].LensModel.length;
      setLensModelCount(LensModelCount);
    }
  }, []);

  //   const logos = {
  //     apple: require('../../logos/apple_logo.jpg'),
  //   };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{uri: image.uri}}
        style={[styles.image, {aspectRatio: aspectRatio}]}
      />
      <View style={styles.exif_container}>
        {/* left */}
        <View
          style={[
            styles.exif_left,
            {width: LensModelCount > 30 ? '30%' : '40%'},
          ]}>
          <Text style={styles.model}>{exifData['{TIFF}'].Model}</Text>
        </View>

        {/* right */}
        <View
          style={[
            styles.exif_right,
            {width: LensModelCount > 30 ? '70%' : '60%'},
          ]}>
          <Image
            source={LogoDatabase[logo]}
            style={{
              width: 50,
              height: 50,
              resizeMode: 'contain',
            }}
          />
          <View style={{marginLeft: 10}}>
            <Text style={styles.LensModel}>
              {exifData['{Exif}'].LensModel || 'no data'}
            </Text>
            <Text style={styles.time}>
              {exifData['{Exif}'].DateTimeOriginal}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Basic;

import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import getLogo from '../../utils/logo';
import LogoDatabase from '../../logos/logo_database';

import useImage from '../../stores/useImage';

import styles from './Basic_style';

const Basic = props => {
  // const {exifData, setEditing} = props;
  // const aspectRatio = exifData.PixelWidth / exifData.PixelHeight;
  const [modelEdit, setModelEdit] = useState(false);
  // const [model, setModel] = useState(exifData['{TIFF}'].Model);
  const {imageURI} = useImage();

  const [logo, setLogo] = useState(null);
  const [LensModelCount, setLensModelCount] = useState(0);

  useEffect(() => {
    console.log('Basic -', imageURI);

    //自适应
    // if (exifData['{Exif}'].LensModel) {
    //   const LensModelCount = exifData['{Exif}'].LensModel.length;
    //   setLensModelCount(LensModelCount);
    // }
  }, []);

  const handleModelEdit = props => {};

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: imageURI}} style={[styles.image]} />
      <View style={styles.exif_container}>
        {/* left */}
        <View
          style={[
            styles.exif_left,
            {width: LensModelCount > 30 ? '30%' : '40%'},
          ]}>
          {/* Model */}
          <TouchableOpacity onPress={() => setModelEdit(true)}>
            {modelEdit ? (
              <TextInput
                value={model}
                onChangeText={setModel}
                style={{
                  borderWidth: 1,
                  borderColor: '#000',
                  borderRadius: 5,
                  padding: 5,
                }}
                onFocus={() => setEditing(true)}
                onBlur={() => setEditing(false)}
              />
            ) : (
              <Text style={styles.model}>model</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* right */}
        <View
          style={[
            styles.exif_right,
            {width: LensModelCount > 30 ? '70%' : '60%'},
          ]}>
          <Image
            source={LogoDatabase[logo]}
            style={[
              logo === 'fujifilm'
                ? {width: 70, height: 70}
                : {width: 30, height: 30},
              {resizeMode: 'contain'},
            ]}
          />
          <View style={{marginLeft: 10}}>
            <Text style={styles.LensModel}>
              {/* {exifData['{Exif}'].LensModel || 'no data'} */}
              11
            </Text>
            <Text style={styles.time}>
              {/* {exifData['{Exif}'].DateTimeOriginal} */}
              11
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Basic;

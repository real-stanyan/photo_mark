// import from React
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useState, useEffect} from 'react';

// import image processing tools
import {launchImageLibrary} from 'react-native-image-picker';
import Exif from 'react-native-exif';

// import from Stores
import useImage from '../stores/useImage';
import useExif from '../stores/useExif';

// Window Size
const {width, height} = Dimensions.get('window');

// CSS
const styles = StyleSheet.create({
  container: {
    width,
    height: height * 0.8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upload_btn: {
    width: width * 0.8,
    height: height * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: width * 0.005,
    borderRadius: 10,
    borderStyle: 'dashed',
  },
  upload_btn_text: {
    fontSize: width * 0.06,
  },
});

// COMPONENT
const Main = ({navigation}) => {
  // useImage store
  const {imageURI, setImageURI} = useImage();
  const {width, height, model, ISO, shutterSpeed, f, exif, brand} = useExif();
  const {
    setWidth,
    setHeight,
    setModel,
    setISO,
    setShutterSpeed,
    setF,
    setExif,
    setBrand,
  } = useExif();

  function convertToShutterSpeed(decimal) {
    if (decimal === 0) return '0';

    const numerator = 1;
    console.log('decimal: ', decimal);
    const fraction = numerator / decimal;

    console.log('fraction: ', fraction);

    return `1/${fraction}`;
  }

  useEffect(() => {
    console.log('Main_imageURI: ', imageURI);
    const processImage = async () => {
      if (imageURI) {
        try {
          const exif = await Exif.getExif(imageURI);
          //往store裡面塞資料
          setWidth(exif.exif.PixelWidth || 'N/A');
          setHeight(exif.exif.PixelHeight || 'N/A');
          setModel(exif.exif['{TIFF}'].Model || 'N/A');
          setExif(exif.exif || 'N/A');
          setBrand(exif.exif['{TIFF}'].Make || 'N/A');
          setISO(exif.exif['{Exif}'].ISOSpeedRatings[0] || 'N/A');
          setF(exif.exif['{Exif}'].FNumber || 'N/A');
          setShutterSpeed(
            convertToShutterSpeed(
              parseFloat(exif.exif['{Exif}'].ExposureTime),
            ) || 'N/A',
          );
          navigation.navigate('Display');
        } catch (error) {
          console.error(error);
        }
      }
    };
    processImage();
  }, [imageURI, navigation]);

  const handleUpload = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };
    try {
      launchImageLibrary(options, response => {
        console.log('Main_response: ', response.assets[0].uri);
        setImageURI(response.assets[0].uri);
      });
    } catch (err) {
      console.log('Main_handleUpload_err: ', err);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.upload_btn} onPress={handleUpload}>
        <Text style={styles.upload_btn_text}>upload your photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;

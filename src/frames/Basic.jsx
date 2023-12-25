// import from React
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {useState, useEffect} from 'react';

// import from Stores
import useImage from '../stores/useImage';
import useExif from '../stores/useExif';

// import Utils
import LogoDatabase from '../logos/logo_database';
import getLogo from '../utils/logo';

// Window Size
const {width, height} = Dimensions.get('window');

// CSS
const styles = StyleSheet.create({
  container: {
    padding: width * 0.05,
    paddingBottom: 0,
    backgroundColor: '#fff',
  },
  image: {
    resizeMode: 'contain',
  },
  text_container: {
    flexDirection: 'row',
    height: height * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text_container_left: {
    width: width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_contaienr_model: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  text_container_right: {
    width: width * 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.1,
    // height: width * 0.1,
    marginRight: width * 0.02,
    resizeMode: 'contain',
  },
});

const Basic = () => {
  const {imageURI} = useImage();
  const {exif, width, height, model, brand, lensModel, shutterSpeed, f} =
    useExif();
  console.log(lensModel);
  const aspectRatio = width / height;
  const logo = getLogo(brand);
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image source={{uri: imageURI}} style={[{aspectRatio}, styles.image]} />
      {/* Text Contaienr */}
      <View style={styles.text_container}>
        {/* Text Container Left */}
        <View style={styles.text_container_left}>
          <Text style={styles.text_contaienr_model}>{model}</Text>
        </View>
        {/* Text Container Right */}
        <View style={styles.text_container_right}>
          <Image
            source={LogoDatabase[logo]}
            style={[
              styles.logo,
              logo === 'fujifilm'
                ? {
                    width: 70,
                  }
                : {},
            ]}
          />
          <View>
            <Text>{lensModel}</Text>
            <Text>
              {shutterSpeed} ƒ{f}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Basic;

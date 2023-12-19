import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%', // 宽度填满容器
    height: 'auto',
  },
  image: {
    width: '100%', // 宽度填满容器
    resizeMode: 'contain', // 'cover', 'contain', 'stretch',     'repeat', 'center'
  },
  exif_container: {
    width: '100%',
    height: 90,
    backgroundColor: '#000000',
  },
  exif_container_text: {
    fontSize: 20,
    color: '#ffffff',
  },
});

export default styles;

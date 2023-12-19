import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%', // 宽度填满容器
    height: 'auto',
    flexDirection: 'column',
    borderRadius: 1,
    marginTop: 10,
    marginBottom: 10,
    // iOS 阴影样式
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // Android 阴影样式
    elevation: 5,
  },
  image: {
    width: '100%', // 宽度填满容器
    resizeMode: 'contain', // 'cover', 'contain', 'stretch',     'repeat', 'center'
  },
  exif_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 90,
    backgroundColor: '#fff',
  },
  exif_left: {
    width: '40%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exif_right: {
    width: '60%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  model: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  LensModel: {
    fontSize: 10,
    color: '#000000',
    flexWrap: 'nowrap',
  },
  time: {
    fontSize: 10,
    color: '#000000',
  },
  exif_container_text: {
    fontSize: 20,
    color: '#000000',
  },
});

export default styles;

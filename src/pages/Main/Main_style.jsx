import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  init: {
    width: '100%',
    height: '100%',
    // backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
  },
  logo_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo_text: {
    fontFamily: 'Orbitron-VariableFont_wght',
    fontSize: 20,
  },
  init_img: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  container: {
    width: '100%',
    height: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upload_btn: {
    // width: '90%',
    // height: '20%',
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dashed',
  },
  upload_btn_img: {
    width: 50,
    height: 50,
  },
  upload_btn_text: {
    fontSize: 20,
  },
});

export default styles;

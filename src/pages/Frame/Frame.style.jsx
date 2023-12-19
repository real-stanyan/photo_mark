import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%', // 宽度填满容器
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'flex-end', // 如果您想要 Modal 出现在底部
    margin: 0, // 如果您不希望有任何外边距
  },
  btn_area: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    width: '40%',
    height: 70,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000000',
    borderStyle: 'solid',
  },
});

export default styles;

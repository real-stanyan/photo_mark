import {
  View,
  Text,
  Modal,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import Basic from '../../frames/Basic/Basic';

import styles from './Frame.style';

const Frame = props => {
  const [editing, setEditing] = useState(false);
  const renderFrame = () => {
    if (props.frame === 'Basic') {
      return (
        <Basic
          image={props.image}
          exifData={props.exifData}
          setEditing={setEditing}
        />
      );
    }
  };
  useEffect(() => {
    renderFrame();
  }, []);

  console.log('====================================');
  console.log(editing);
  console.log('====================================');

  return (
    <Modal
      animationType="slide"
      visible={props.visible}
      onRequestClose={() => {
        // 这里是当用户尝试关闭模态窗口时您想执行的动作
        props.setShow(false);
      }}
      style={styles.modal}>
      <SafeAreaView
        style={[editing ? {marginTop: -300} : {}, styles.container]}>
        {renderFrame()}
        {/* 按钮区域 */}
        <View style={styles.btn_area}>
          {/* Close btn */}
          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.setShow(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
          {/* Close btn */}
          <TouchableOpacity style={styles.btn}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
        {/* ---按钮区域--- */}
      </SafeAreaView>
    </Modal>
  );
};

export default Frame;

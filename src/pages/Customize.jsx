// import from React
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import {useState, useEffect} from 'react';

// import from Stores
import useImage from '../stores/useImage';
import useExif from '../stores/useExif';

// Window Size
const {width, height} = Dimensions.get('window');

// CSS
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  input_container: {
    width,
    height: height * 0.1,
    padding: width * 0.02,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: height * 0.02,
  },
  input_text: {
    flex: 4,
    fontSize: width * 0.045,
  },
  input: {
    flex: 10,
    width: width * 0.6,
    height: height * 0.05,
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: width * 0.05,
    textAlign: 'center',
  },
});
const Customize = () => {
  const {width, height, model, brand, ISO, shutterSpeed, f} = useExif();
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

  return (
    <ScrollView style={styles.container}>
      {/* Pixel Width */}
      <View style={styles.input_container}>
        <Text style={styles.input_text}>Pixel Width</Text>
        <TextInput value={width} style={styles.input} onChangeText={setWidth} />
      </View>
      {/* Pixel Height */}
      <View style={styles.input_container}>
        <Text style={styles.input_text}>Pixel Height</Text>
        <TextInput
          value={height}
          style={styles.input}
          onChangeText={setHeight}
        />
      </View>
      {/* Brand */}
      <View style={styles.input_container}>
        <Text style={styles.input_text}>Brand</Text>
        <TextInput value={brand} style={styles.input} onChangeText={setBrand} />
      </View>
      {/* Model */}
      <View style={styles.input_container}>
        <Text style={styles.input_text}>Model</Text>
        <TextInput value={model} style={styles.input} onChangeText={setModel} />
      </View>
      {/* ISO */}
      <View style={styles.input_container}>
        <Text style={styles.input_text}>ISO</Text>
        <TextInput value={ISO} style={styles.input} onChangeText={setISO} />
      </View>
      {/* F */}
      <View style={styles.input_container}>
        <Text style={styles.input_text}>F</Text>
        <TextInput value={f} style={styles.input} onChangeText={setF} />
      </View>
      {/* Shutter Speed */}
      <View style={styles.input_container}>
        <Text style={styles.input_text}>Shutter Speed</Text>
        <TextInput
          value={shutterSpeed}
          style={styles.input}
          onChangeText={setShutterSpeed}
        />
      </View>
    </ScrollView>
  );
};

export default Customize;

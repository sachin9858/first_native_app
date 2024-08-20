import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ImagePicker = () => {
  // Example using React Native Image Picker
  const openImagePicker = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel && !response.error) {
        const imageUri = response.uri;
        const imageName = 'images/example.jpg';
        uploadImage(imageUri, imageName);
      }
    });
  };
  
  return (
    <View>
      <Text>ImagePicker</Text>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import storage  from '@react-native-firebase/storage';

const PhotoUpload = () => {

  const uploadImageWithProgress = (uri, imageName) => {
    const storageRef = storage().ref(imageName);
    const uploadTask = storageRef.putFile(uri);
  
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      snapshot => {
        // Handle progress
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      error => {
        // Handle unsuccessful uploads
        console.error('Error uploading image:', error);
      },
      () => {
        // Handle successful uploads
        console.log('Image uploaded successfully!');
      }
    );
  };
  const localFilePath = require('../assets/image/dp.jpg').uri;
  const imageName = 'images/myphoto.jpg';
  uploadImageWithProgress();
  

  return (
    <View>
      <Text>PhotoUpload</Text>
    </View>
  )
}

export default PhotoUpload

const styles = StyleSheet.create({})
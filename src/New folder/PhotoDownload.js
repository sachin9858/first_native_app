import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import storage  from '@react-native-firebase/storage';

const PhotoDownload = () => {
  const [downloadURL, setDownloadURL] = useState('');

  useEffect(() => {
    const fetchDownloadURL = async () => {
      try{
        const storageRef = storage().ref('SKYphoto.jpg'); // Replace with the path to your image
        const url = await storageRef.getDownloadURL();
        Alert.alert("Image downlaoded successfully");
        console.log("Image downloaded successfully");
        setDownloadURL(url);
      }
      catch(error){
        Alert.alert("Image not exist")
        console.error("Image not downloaded",error);
      }
    }
    fetchDownloadURL();
  }, []);

  return (
    <>
    {downloadURL ? (<Image source={{ uri: downloadURL }} style={{ width: 200, height: 200, borderRadius: 60, margin: 10 }}/>) : (<Text>Loading.........</Text>)}
  </>
  )
}

export default PhotoDownload

const styles = StyleSheet.create({})
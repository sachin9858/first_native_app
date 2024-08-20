import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

const data = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  age: 30
};

const Practice = () => {

  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const currentUser = auth().currentUser;
        if (currentUser) {
          console.log("User is already login, User UID => ",currentUser.uid);
          const userDoc = await firestore().collection('profile').doc(currentUser.uid).get;
          if (userDoc.exists) {
            console.log("data downloded successfullyy");
            setUserDetails(userDoc.data());
          }
          else {
            console.log('User document does not exist.');
          }
        }
        else {
          console.log('No user signed in.');
        }
      }
      catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
    fetchUserDetails();
    
  },[]);

  return (
    <View>
      <Text  style={{fontSize:30, color:'red'}}>Downloading data of particular(logined user) user using uid</Text>
      <Text>Name = {userDetails?.name}</Text>
      <Text>Age = {userDetails?.age}</Text>
      <Text>DOB = {userDetails?.dob}</Text>
    </View>
  )
}

export default Practice

const styles = StyleSheet.create({})
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

const Table = () => {

    const [currentDate,setCurrentDate] = useState(new Date());
    const [day,setDay] = useState(currentDate.getDate());
    const [month,setMonth] = useState(currentDate.getMonth()+1);  // Months are zero-based, so add 1
    const [year,setYear] = useState(currentDate.getFullYear());
    const [milk,setMilk] = useState(0);
    const [data,setData] = useState([]);
    const a = 88;

    const dataToUpdate = {
      '2024': {
          '3': { // March
              'dataPoint1': { value: 25, unit: 'liters' },
              'dataPoint2': { value: 18, unit: 'liters' },
          },
          '4': { // April
              'dataPoint1': { value: 30, unit: 'liters' },
              'dataPoint2': { value: 22, unit: 'liters' },
          },
      },
    };

    const handleUpload = async()=>{
        const currentUser = auth().currentUser;
        try{
            if(currentUser){
                //firebase.firestore().collection('milk').doc(currentUser.uid);
                const docRef = firebase.firestore().collection('milk').doc(currentUser.uid);
                //console.log(docRef);
                await docRef.update({[month]:firestore.FieldValue.arrayUnion(a)});
                console.log("data upload successfully");
            }
            else{
                console.log("user not login");
            }
        }
        catch(error){
            console.error("error in upload data",error);
            firebase.firestore().collection('milk').doc(currentUser.uid).set({});
            console.log("just try again");
        }
    }

  return (
    <View>
      <Text>{day}</Text>
      <Text>{month}</Text>
      <Text>{year}</Text>
      <TextInput placeholder='2.5' onChangeText={text => setMilk(text)} value={milk} style={{fontSize:20,borderColor:'green',borderWidth:3}}></TextInput>
      <TouchableOpacity onPress={handleUpload}><Text style={{fontSize:20 ,color:'red'}}>upload</Text></TouchableOpacity>
    </View>
  )
}

export default Table

const styles = StyleSheet.create({})
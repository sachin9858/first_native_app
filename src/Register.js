import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';

const Register = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const hey=()=>{
    console.log(email);
    console.log(password);
  }

  const handleSignUp = async () => {
    hey();
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      // User registration successful
      console.log('User registered:', userCredential.user);
      Alert.alert('Success', 'User registered successfully');
    }
    // if it gets error
    catch (error) {
      console.error('Error registering user:', error);
      Alert.alert('Error', 'Failed to register user. Please try again.');
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={{color:'black', textAlign:'center', fontSize:30, fontWeight:'bold', marginBottom:40}}>Register</Text>
        <TextInput style={styles.inputView} onChangeText={setName} placeholder='Name'/>
        <TextInput style={styles.inputView} onChangeText={text => setEmail(text)} value={email} placeholder='Email or Phone'/>
        <TextInput style={styles.inputView} onChangeText={text => setPassword(text)} value={password} secureTextEntry={true} placeholder='Enter Your Password'/>
        
        <TouchableOpacity style={styles.signupBtn} onPress={handleSignUp}><Text style={{color:'white'}}>REGISTER</Text></TouchableOpacity>
        <Text style={{textAlign:'center', marginTop:40}}>------ or continue with ------</Text>
        <TouchableOpacity style={{flexDirection:'row', borderBlockColor:"gray", height:40, padding:5, borderWidth:1.5, borderRadius:15, justifyContent:'center'}}>
            <Image source={require('../assets/image/googleLogo.png')} style={{height:25, width:25, alignContent:'center'}}/>
            <Text style={{color:'black', fontSize:15}}>Signup with Google</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row', justifyContent:'center', marginTop:20}}>
          <Text>Already have an account? </Text>
          <TouchableOpacity><Text style={{color:'blue'}}>Login</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container:{

    backgroundColor:'#FFFFFF',
    borderRadius:20,
    height:600,
    marginTop:100,
    margin:20,
    padding:20,
    elevation:20,
    shadowColor:'blue',
  },
  inputView: {
    // backgroundColor: '#465881',
    backgroundColor: '#466bc2',
    borderRadius: 25,
    height:50,
    paddingLeft:25,
    marginBottom:20,
    color:"white",
    
  },
  signupBtn: {
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
})
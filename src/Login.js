import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert} from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const hey=()=>{
    console.log("hey");
    console.log(email);
    console.log(password);
  }

  const handleLogin = async () => {
    hey();
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      Alert.alert('Success', `Logged in as ${user.email}`);
    }
    catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={{color:'black', textAlign:'center', fontSize:30, fontWeight:'bold', marginBottom:40}}>Login</Text>
        <TextInput style={styles.inputView} onChangeText={text => setEmail(text)} value={email} placeholder='Email or Phone'/>
        <TextInput style={styles.inputView} onChangeText={text => setPassword(text)} value={password} secureTextEntry={true} placeholder='Enter Your Password'/>

        <TouchableOpacity style={{marginLeft:'auto'}}><Text style={{textAlign:'right',color:'blue'}}>Forget password?</Text></TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}><Text style={{color:'white'}}>LOGIN</Text></TouchableOpacity>

        <Text style={{textAlign:'center', marginTop:40,marginBottom:10}}>-------------- or continue with --------------</Text>
        <TouchableOpacity style={{flexDirection:'row', borderBlockColor:"gray", height:40, padding:5, borderWidth:1.5, borderRadius:15, justifyContent:'center'}}>
            <Image source={require('../assets/image/googleLogo.png')} style={{height:25, width:25, alignContent:'center'}}/>
            <Text style={{color:'black', fontSize:15}}>Login with Google</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row', justifyContent:'center', marginTop:20}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity><Text style={{color:'blue'}}>Register</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFFFFF',
    borderRadius:20,
    height:500,
    marginTop:150,
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
  loginBtn: {
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
})
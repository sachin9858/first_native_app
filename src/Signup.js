import { TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Email"
        onChangeText={text => setEmail(text)} value={email}
      />
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Password"
        onChangeText={text => setPassword(text)} value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  )
}
export default Signup

const styles = StyleSheet.create({})



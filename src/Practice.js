import {StyleSheet, Text, Button, TextInput, View, FlatList} from 'react-native';
import React, {useState} from 'react';

const Practice = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible,setPasswordVisible] = useState(true);

  const users=[
    {
      id:1,
      name:"sachin",
      class:14
    },
    {
      id:2,
      name:"anju",
      class:16
    },
    {
      id:3,
      name:"ankit",
      class:19
    },
    {
      id:4,
      name:"satish",
      class:7
    },
    {
      id:5,
      name:"anjali",
      class:5
    }
  ];

  const numbers = [1,2,3,4,5,6]

  return (
    <View>
      <TextInput onChangeText={setName} value={name} placeholder="Enter user Name" style={styles.textInput} />
      <TextInput onChangeText={setEmail}  value={email} placeholder="Enter User Email" style={styles.textInput} />
      <TextInput onChangeText={setPassword}  value={password} secureTextEntry={passwordVisible} placeholder="Enter email Password" style={styles.textInput}/>
      <Text>Name🐵 = {name} </Text>
      <Text>Email = {email} </Text>
      <Text>Password = {password} </Text>
      <Button
        title={passwordVisible ? '🐵' : '🙈'}
        onPress={passwordVisible?()=>setPasswordVisible(false): ()=>setPasswordVisible(true)}
      />
      <View>
        <FlatList
        data={users}
        renderItem={({item})=>
          <View style={{flexDirection:'row', borderWidth:3, borderColor:'pink', margin:5}}>
            <Text style={styles.FlatList_item}>{item.name}</Text>
            <Text style={styles.FlatList_item}>{item.class}</Text>
          </View>
        }
        />
      </View>
    </View>
  );
};

export default Practice;

const styles = StyleSheet.create({
  FlatList_item:{
    color:'orange',
    fontSize:30,
    flex:1,
  },
  textInput: {
    backgroundColor: 'skyblue',
    borderWidth: 2,
    borderColor: 'red',
    margin: 5,
  },
});

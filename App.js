import { ActivityIndicator, Button, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import Login from './src/Login'
import Register from './src/Register'
import TickTackToe from './src/TickTackToe'
import Home from './src/Home'
import Signup from './src/Signup'

const App = () => {
  const [show,setShow]=useState(false);
  const displayloder=()=>{
    show?setShow(false):setShow(true);
    setTimeout( ()=>{
      show?setShow(true):setShow(false);
    },2000);
    // show for 2 second
  }
  
  return (
    <View>
      <StatusBar backgroundColor='red'/>
      <ScrollView>
      <ActivityIndicator size='50' color='red' animating={show}/>
      <Button title='show loder' onPress={displayloder}/>
        <Home/>
        <Login/>
        <Register/>
        <TickTackToe/>
      </ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
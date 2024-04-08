import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <Image source={require('../assets/image/cv.png')}  style={{width:'90%', margin:10}}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
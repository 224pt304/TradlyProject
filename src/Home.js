import { View, Text } from 'react-native'
import React from 'react'
import TitleBar from './TitleBar';
const Home = () => {
  return (
    <View>
      <TitleBar title={'Home'}/>
      <Text>Home</Text>
    </View>
  )
}

export default Home
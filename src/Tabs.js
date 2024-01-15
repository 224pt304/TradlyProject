import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home';
import Browser from './Browser';
import ProductDetail from './ProductDetail';
import Favorite from './Favorite';
import OrderHistory from './OrderHistory';
import Profile from './Profile';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator

      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          {
            display: 'flex',
            height: 80
          },
        ],
      }}>

      <Tab.Screen name='Home' component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused  }) => (
            <View style={{alignItems: 'center'}}>
              <Image
                style={[styles.icon, {
                  tintColor: focused  ? '#33907C' : '#4F4F4F'
                }]}
                source={require('../assets/images/homeBottom.png')}
                resizeMode='contain' />
              <Text style={{color: focused  ? '#33907C' : '#4F4F4F'}}>Home</Text>
            </View>
          )
        }} />

      <Tab.Screen name='Browser' component={Favorite}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused  }) => (
            <View style={{alignItems: 'center'}}>
              <Image
                style={[styles.icon, {
                  tintColor: focused  ? '#33907C' : '#4F4F4F'
                }]}
                source={require('../assets/images/searchBottom.png')}
                resizeMode='contain' />
              <Text style={{color: focused  ? '#33907C' : '#4F4F4F'}}>Browser</Text>
            </View>
          )
        }} />

      <Tab.Screen name='Favorite' component={Favorite}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused  }) => (
            <View style={{alignItems: 'center'}}>
              <Image
                style={[styles.icon, {
                  tintColor: focused  ? '#33907C' : '#4F4F4F'
                }]}
                source={require('../assets/images/loveBottom.png')}
                resizeMode='contain' />
              <Text style={{color: focused  ? '#33907C' : '#4F4F4F'}}>Favorite</Text>
            </View>
          )
        }} />

      <Tab.Screen name='OrderHistory' component={OrderHistory}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused  }) => (
            <View style={{alignItems: 'center'}}>
              <Image
                style={[styles.icon, {
                  tintColor: focused  ? '#33907C' : '#4F4F4F'
                }]}
                source={require('../assets/images/historyBottom.png')}
                resizeMode='contain' />
              <Text style={{color: focused  ? '#33907C' : '#4F4F4F'}}>History</Text>
            </View>
          )
        }} />

      <Tab.Screen name='Profile' component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused  }) => (
            <View style={{alignItems: 'center'}}>
              <Image
                style={[styles.icon, {
                  tintColor: focused  ? '#33907C' : '#4F4F4F'
                }]}
                source={require('../assets/images/profileBottom.png')}
                resizeMode='contain' />
              <Text style={{color: focused  ? '#33907C' : '#4F4F4F'}}>Profile</Text>
            </View>
          )
        }} />
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({

  icon: {
    width: 20,
    height: 20,
  }


});

export default Tabs
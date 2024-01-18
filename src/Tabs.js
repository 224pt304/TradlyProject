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

  const renderItem = (nameTab,nameIcon,focused) =>{
    return(
      <View style={{alignItems: 'center'}}>
      <Image
        style={[styles.icon, {
          tintColor: focused  ? '#33907C' : '#4F4F4F'
        }]}
        source={nameIcon}
        resizeMode='contain' />
      <Text style={{color: focused  ? '#33907C' : '#4F4F4F'}}>{nameTab}</Text>
    </View>
    );
  };

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
            renderItem('Home',require('../assets/images/homeBottom.png'),focused) 
          )
        }} />

      <Tab.Screen name='Browser' component={Browser}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused  }) => (
            renderItem('Browser',require('../assets/images/searchBottom.png'),focused)
          )
        }} />

      <Tab.Screen name='Favorite' component={Favorite}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused  }) => (
            renderItem('Favorite',require('../assets/images/loveBottom.png'),focused)
          )
        }} />

      <Tab.Screen name='OrderHistory' component={OrderHistory}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused  }) => (
            renderItem('Order',require('../assets/images/historyBottom.png'),focused)
          )
        }} />

      <Tab.Screen name='Profile' component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused  }) => (
           renderItem('Profile',require('../assets/images/profileBottom.png'),focused)
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
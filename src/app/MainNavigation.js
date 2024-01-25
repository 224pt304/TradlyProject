import React, { useContext } from 'react';
import {
  StyleSheet,
} from 'react-native';

import { AppContext } from '../AppContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import ProductDetail from '../app/main/stack/ProductDetail'
import Create_Feedback from '../app/main/stack/Create_Feedback';
import Create from './authen/Create';
import Otp_verfitation from './authen/Otp_verfitation';
import Send_Otp from './authen/Send_Otp';
import Cart from './main/stack/Cart';
import EditProfile from './main/stack/EditProfile';
import About from './main/stack/About';
import FeedBack from '../app/main/stack/Feedback'
import Welcome from './authen/Welcome';
import Onboarding from './authen/Onboarding';
import Add_address from './main/stack/Add_address';
import Order_details from './main/stack/Order_details';
import Login from './authen/Login';
import Tabs from './main/tab/Tabs';

const TabsNavigate = () => {
    const Tab = createNativeStackNavigator();
    return (
        <Tab.Navigator initialRouteName='Tabs' screenOptions={{ headerShown: false}}>
          <Tab.Screen name='Tabs' component={Tabs} />
          <Tab.Screen name='About' component={About} />
          <Tab.Screen name='FeedBack' component={FeedBack} />
          <Tab.Screen name='Cart' component={Cart} />
          <Tab.Screen name='Add_address' component={Add_address} />
          <Tab.Screen name='Order_details' component={Order_details} />
          <Tab.Screen name='Create_Feedback' component={Create_Feedback} />
          <Tab.Screen name='EditProfile' component={EditProfile} />
          <Tab.Screen name='ProductDetail'  component={ProductDetail}/>
        </Tab.Navigator>
    )

}
const StackNavigate = () => {
  const Stack = createNativeStackNavigator();
return(
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
      <Stack.Screen name='Welcome' component={Welcome}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Create' component={Create}/>
      <Stack.Screen name='Otp_verfitation' component={Otp_verfitation}/>
      <Stack.Screen name='Onboarding' component={Onboarding}/>
      <Stack.Screen name='Send_Otp' component={Send_Otp}/>
    </Stack.Navigator>
)
}


const MainNavigation = () => {
  const {isLogin, setislogin} = useContext(AppContext);
  return (
    <NavigationContainer>
      {isLogin ? <TabsNavigate/> : <StackNavigate/>}
  </NavigationContainer>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})
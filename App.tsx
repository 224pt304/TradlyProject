import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import ProductDetail from './src/ProductDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainActivity from './src/MainActivity';
import Cart from './src/Cart';
import Create_Feedback from './src/Create_Feedback';
import EditProfile from './src/EditProfile';
import About from './src/About';
import FeedBack from './src/Feedback';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainActivity'>
        <Stack.Screen name='ProductDetail' component={ProductDetail} options={{headerShown: false}}/>
        <Stack.Screen name='MainActivity' component={MainActivity}   options={{headerShown: false}}/>
        <Stack.Screen name='Cart' component={Cart}   options={{headerShown: false}}/>
        <Stack.Screen name='Create_Feedback' component={Create_Feedback}   options={{headerShown: false}}/>
        <Stack.Screen name='EditProfile' component={EditProfile}   options={{headerShown: false}}/>
        <Stack.Screen name='About' component={About}   options={{headerShown: false}}/>
        <Stack.Screen name='FeedBack' component={FeedBack}   options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;

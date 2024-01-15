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

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainActivity'>
        <Stack.Screen name='ProductDetail' component={ProductDetail} options={{headerShown: false}}/>
        <Stack.Screen name='MainActivity' component={MainActivity}   options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;

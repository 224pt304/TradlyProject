import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <StatusBar/>
      <View>
        <Text>
          Hello world hehe
        </Text>
      </View>
    </SafeAreaView>
  );
}



export default App;

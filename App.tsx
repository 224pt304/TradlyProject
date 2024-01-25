import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppContextProvider } from './src/AppContext';
import MainNavigation from './src/app/MainNavigation';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {

  return (
    <AppContextProvider>
      <MainNavigation/>
    </AppContextProvider>
    
  );
}

export default App;

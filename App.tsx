
import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { AppStackNavigator } from './src/navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  )
}
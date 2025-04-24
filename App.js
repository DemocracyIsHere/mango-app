import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileSetup from './components/ProfileSetup';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProfileSetup" component={ProfileSetup} options={{ title: 'Setup Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

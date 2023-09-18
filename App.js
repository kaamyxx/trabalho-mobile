import React from 'react'
import Form from './screens/Form';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Nasa" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


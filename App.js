import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import { COMMUNITY, FRIENDS, HOME } from './src/constants/routes';
import Friends from './src/pages/Friends';
import Navbar from './src/components/Navbar';
import Community from './src/pages/Community';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: "none" }}>
        <Stack.Screen name={HOME} options={{ headerShown: false }} component={ Home } />
        <Stack.Screen name={FRIENDS} options={{ headerShown: false }} component={ Friends } />
        <Stack.Screen name={COMMUNITY} options={{ headerShown: false }} component={ Community } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
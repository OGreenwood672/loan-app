import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { COMMUNITY, FRIENDS, HOME, MAKEREQUEST, OFFER, VIEWREQUESTS } from './src/constants/routes';

import Home from './src/pages/Home';
import Friends from './src/pages/Friends';
import Community from './src/pages/Community';
import Offer from './src/pages/Offer';
import MakeRequest from './src/pages/MakeRequest';
import ViewRequests from './src/pages/ViewRequest';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: "none" }}>
        <Stack.Screen name={HOME} options={{ headerShown: false }} component={ Home } />
        <Stack.Screen name={FRIENDS} options={{ headerShown: false }} component={ Friends } />
        <Stack.Screen name={COMMUNITY} options={{ headerShown: false }} component={ Community } />
        <Stack.Screen name={OFFER} options={{ headerShown: false }} component={ Offer } />
        <Stack.Screen name={MAKEREQUEST} options={{ headerShown: false }} component={ MakeRequest } />
        <Stack.Screen name={VIEWREQUESTS} options={{ headerShown: false }} component={ ViewRequests } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
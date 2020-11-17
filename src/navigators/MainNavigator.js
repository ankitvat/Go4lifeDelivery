import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen.js';
import LoginScreen from '../screens/LoginScreen.js';
import HomeScreen from '../screens/HomeScreen.js';
import ForgotScreen from '../screens/ForgotScreen.js';
import SignInScreen from '../screens/SignInScreen.js';
import NewPassScreen from '../screens/NewPassScreen.js';
import DashboardSCreen from '../screens/DashboardScreen.js';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Forgot" component={ForgotScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="NewPass" component={NewPassScreen} />
      <Stack.screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
}

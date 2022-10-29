import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Screens/LoginScreen';
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen';
import SignUpEmailorPhone from './Screens/SignUpEmailorPhone';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen}/>
        <Stack.Screen name='SignUpEmailorPhone' component={SignUpEmailorPhone}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack'
import {SafeAreaView} from 'react-native';
import { LoginScreen } from './src/screens/LoginScreen';
import Screen01 from './src/screens/Screen01';
import Screen02 from './src/screens/Screen02';
import Screen03 from './src/screens/Screen03';
import Menu from './src/components/Menu';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{title: 'Menu', headerShown: false}}
        />
      <Stack.Screen
        name="Screen01"
        component={Screen01}
        options={{title:'Titulo ... Screen01'}}
        />
        <Stack.Screen
        name="Screen02"
        component={Screen02}
        options={{title:'Titulo ... Screen02'}}
        />
        <Stack.Screen
        name="Screen03"
        component={Screen03}
        options={{title:'Titulo ... Screen03'}}
        />
      </Stack.Navigator>
      <Menu/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

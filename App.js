
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './Store'
import Home from './components/Home';
import Registerasi from './components/Registerasi';
import Login from './components/Login'
import MainMenu from './components/MainMenu';
import Laporan from './components/Laporan';
import History from './components/History';
import Map from './components/Map';


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider >
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Registerasi" component={Registerasi}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="MainMenu" component={MainMenu} />
          <Stack.Screen name="Laporan" component={Laporan}/>
          <Stack.Screen name="History" component={History}/>
          <Stack.Screen name="Map" component={Map}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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

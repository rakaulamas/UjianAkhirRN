import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Router from './src/router/Router';
import Store from './src/Redux/Store';



export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <Router/>
        </NavigationContainer>
      </Provider>
    )
  }
}

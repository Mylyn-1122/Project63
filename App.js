import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen'

export default function App() {
  return (
    <View>
      <HomeScreen/>
    </View>
  );
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen
})

const AppContainer = createAppContainer(AppNavigator)
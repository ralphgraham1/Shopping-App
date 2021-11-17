import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, useColorScheme, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from './screens/login';
import Homepage from './screens/home';
import Cart from './screens/cart';
import ProductScreen from './Components/Productscreen';



export default function App() {
  const MainNavigator = createStackNavigator();
  return (

    <NavigationContainer>
      <MainNavigator.Navigator initialRouteName="home" >

        <MainNavigator.Screen name='Login' component={LogIn} />
        <MainNavigator.Screen name='home' component={Homepage} />
        <MainNavigator.Screen name='ProductScreen' component={ProductScreen}/>
        <MainNavigator.Screen name="Cart" component={Cart} />
      </MainNavigator.Navigator>
    </NavigationContainer>




  );
}



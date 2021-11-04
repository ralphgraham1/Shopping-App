import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'  ;
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from './screens/login';
import Homepage from './screens/home';
import Cart from './screens/cart';



export default function App() {
  const MainNavigator=createStackNavigator();
  return (
    
<NavigationContainer>
       <MainNavigator.Navigator>
      
         <MainNavigator.Screen name='Login' component={LogIn}/>
         <MainNavigator.Screen name='Home' component={Homepage}/>
         <MainNavigator.Screen name="Cart" component={Cart}/>
       </MainNavigator.Navigator>
     </NavigationContainer>
    
  
     
   
  );
}



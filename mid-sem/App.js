import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'  ;
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import Homepage from './screens/home';
import Cart from './screens/cart';



export default function App() {
  const MainNavigator=createStackNavigator();
  return (
    <View >
     <NavigationContainer>
       <MainNavigator.Navigator>
      
         <MainNavigator.Screen name='Login' component={Login}/>
         <MainNavigator.Screen name='Home' component={Homepage}/>
         <MainNavigator.Screen name="Cart" component={Cart}/>
       </MainNavigator.Navigator>
     </NavigationContainer>

     <Login/>
    </View>
   
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

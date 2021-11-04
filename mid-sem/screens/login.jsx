import React from "react";
import { View,Text,Image,TextInput,TouchableOpacity,ImageBackground} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";



const LogIn=() =>{
    return(
        <ImageBackground style={{flex:1,alignItems:"center",opacity:0.9}}source={require('../assets/Images/login.jpg')} >
            <SafeAreaView style={{
                flex:1,alignItems:"center",justifyContent:"center"
            }}>
                <SafeAreaView style={{
                    width:320,height:50,flexDirection:'column',marginBottom:20
                }}>
                <Text style={{
                    fontSize:20,fontWeight:'500',color:'white'
                }}>Welcome Back!</Text>
                </SafeAreaView>

            </SafeAreaView>
 
        </ImageBackground>
    )
}
export default LogIn;
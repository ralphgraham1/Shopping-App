import React from "react";
import { View,Text,Image,TextInput,TouchableOpacity,ImageBackground,Button} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";




const LogIn=() =>{
    return(
       
            <SafeAreaView style={{
                flex:1,alignItems:"center",justifyContent:"center"
            }}>
                <SafeAreaView style={{
                    width:320,height:50,flexDirection:'column',marginBottom:20
                }}>
                <Text style={{
                    fontSize:20,fontWeight:'500',color:'#edf1f2'
                }}>Welcome Back!</Text>
                <Text style={{
                    fontSize:25,fontWeight:'500',color:'#edf1f2'
                }}>Please sign in to Continue</Text>
                </SafeAreaView>
                <SafeAreaView style={{
                    alignItems:'center',
                    justifyContent:'center',
                    width:'250',
                    height:'100',
                    margin:'20',
                    borderRadius:'10',
                    


                }}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'#edf1f2'}}>Username or Email</Text>
                    <SafeAreaView style={{
                        flexDirection:'row'
                    }}>
                        <MaterialIcons name='email'size={20}color="black"/>
                        <TextInput style={{
                            marginLeft:10,fontWeight:'500',fontSize:20,color:'#edf1f2'
                        }}
                        placeholder="grahamraphael@gmail.com"></TextInput>
                    </SafeAreaView>
                    <SafeAreaView style={{
                        alignItems:'center',justifyContent:'center',width:'250',height:'100',margin:'20',borderRadius:'10'
                    }}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'#edf1f2'}}>Password</Text>
                        <SafeAreaView style={{flexDirection:'row'}}>
                            <AntDesign name='unlock'size={24}color='black'/>
                            <TextInput style={{
                                marginLeft:10,fontWeight:'500',fontSize:20,color:'#edf1f2'
                            }}
                            placeholder='password'></TextInput>
                            <Text style={{color:'#850505',marginLeft:'5',marginRight:10}}>Forgot Password?</Text>
                        </SafeAreaView>
                    </SafeAreaView>
                    <SafeAreaView>
                        <TouchableOpacity style={{
                            width:300,
                            height:60,
                            alignItems:'center',
                            justifyContent:"center",
                            backgroundColor:"green",
                            borderRadius:10,
                            opacity:0.7,
                            marginTop:20
                        }}>
                            <Button style={{fontWeight:'bold',color:'#a9c26e',fontSize:28}}>Sign In</Button>

                        </TouchableOpacity>
                    </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>
 
        
    )
}
export default LogIn;
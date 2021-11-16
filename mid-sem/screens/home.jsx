import React from "react";
import { View,Text,TextInput,Image,TouchableOpacity,StyleSheet} from "react-native";
import { useColorScheme,AppearanceProvider } from "react-native-appearance";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Products from "../Components/products";

const Homepage=()=>{
    const color=useColorScheme();
    return (
        <SafeAreaView style={styles.page}>
            {/*Render a product Component*/}
           <Products/>
        </SafeAreaView>
    )
       
        
}
const styles=StyleSheet.create({
    page:{
        padding:10,
    }
})
  
export default Homepage;
import React from "react";
import { View,Text,TouchableOpacity,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import styles from "./styles";
import { NavigationContainer } from "@react-navigation/native";






const Products=({item,navigation})=>{
    return (
        <TouchableOpacity onPress={()=>{
            navigation.navigate("ProductScreen", {item:item})
        }}>
             <SafeAreaView style={styles.main}>
        <Image style={styles.image} source={item.image} />
        <SafeAreaView stlye={styles.right}>
            <Text stlye={styles.text1} numberOfLines={4}> {item.title}</Text>
            <SafeAreaView style={styles.rating}>
               <Octicons style={styles.star} name='star' size={18} color='#ebb207'/>
               <Octicons style={styles.star} name='star' size={18} color='#ebb207'/>
               <Octicons style={styles.star} name='star' size={18} color='#ebb207'/>
               <Octicons style={styles.star} name='star' size={18} color='#ebb207'/>
               <MaterialCommunityIcons style={styles.star} name="star-half-full" size={19} color="#ebb207" />
               <Text>{item.rating}</Text>
            </SafeAreaView>
            <Text style={styles.text2}>{item.price}</Text>
        </SafeAreaView>
   </SafeAreaView>
        </TouchableOpacity>
       
    )
}

export default Products;
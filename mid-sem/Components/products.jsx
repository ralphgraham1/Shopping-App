import React from "react";
import { View,Text,TouchableOpacity,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import styles from "./styles";
const Products=()=>{
    return (
        <SafeAreaView style={styles.main}>
        <Image style={styles.image} source={require('../assets/Canon5d.jpg')}/>
        <SafeAreaView stlye={styles.right}>
            <Text stlye={styles.text1} numberOfLines={4}>  Canon EOS 5DS R DSLR Camera(Body Only)</Text>
            <SafeAreaView style={styles.rating}>
               <Octicons style={styles.star} name='star' size={18} color='#ebb207'/>
               <Octicons style={styles.star} name='star' size={18} color='#ebb207'/>
               <Octicons style={styles.star} name='star' size={18} color='#ebb207'/>
               <Octicons style={styles.star} name='star' size={18} color='#ebb207'/>
               <MaterialCommunityIcons style={styles.star} name="star-half-full" size={19} color="#ebb207" />
               <Text>10,000</Text>
            </SafeAreaView>
            <Text style={styles.text2}>from Ghc 9000.00</Text>
        </SafeAreaView>
   </SafeAreaView>
    )
}

export default Products;
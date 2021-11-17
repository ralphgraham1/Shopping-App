import React from "react";
import { View,Text,TextInput,Image,TouchableOpacity,StyleSheet, FlatList} from "react-native";
import { useColorScheme,AppearanceProvider } from "react-native-appearance";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Products from "../Components/products";
import Search from "../Components/searchbox";
import products from "../Components/data/products";

const Homepage=({navigation})=>{
    const color=useColorScheme();
    const renderItem = ({item})=>(
        <Products navigation={navigation} item={item}/>
    );
    return (
        <SafeAreaView style={styles.page}>
            {/*Render a product Component*/}
            <Search/>
            {/* <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            /> */}
            <FlatList
            data={products}
            renderItem= {renderItem}
            keyExtractor={item=>item.id}
            />
        </SafeAreaView>
    )
       
        
}
const styles=StyleSheet.create({
    page:{
        padding:10,
    }
})
  
export default Homepage;
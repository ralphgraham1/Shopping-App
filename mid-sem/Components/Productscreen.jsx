import React from "react";
import { View,Text, SafeAreaView } from "react-native";
import styles from './styles'
import products from "./data/products";


const ProductScreen=({navigation, route})=>{
    return(
        <SafeAreaView>
            
            <Text style={styles.head}>{route.params.item.title}</Text>

            <Text style={styles.text2}>{route.params.item.price}</Text>

        </SafeAreaView>
    )
}

export default ProductScreen;
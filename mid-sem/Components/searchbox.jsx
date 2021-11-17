import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

const Search=()=>{
    return(
        <TextInput style={styles.search} placeholder='Search'/>
    )
}

const styles=StyleSheet.create({
search:{

}
})
export default Search;
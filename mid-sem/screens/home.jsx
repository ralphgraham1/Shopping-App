import React from "react";
import { View,Text,TextInput,Image,TouchableOpacity,} from "react-native";
import { useColorScheme,AppearanceProvider } from "react-native-appearance";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Homepage=()=>{
    const color=useColorScheme();
    return (
        <AppearanceProvider>
            <SafeAreaView>

            </SafeAreaView>
        </AppearanceProvider>
        
    )
}
export default Homepage;
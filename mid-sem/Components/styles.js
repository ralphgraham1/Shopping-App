import { StyleSheet } from "react-native"

const styles= StyleSheet.create({
    
    main:{
        flexDirection:'row',
        marginVertical:'5',
        borderWidth:1,
        borderColor:'#f5f0f0',
        borderRadius:10,
        backgroundColor:'#f5f6f7',
        


    },
    image:{
       flex:2,
        height:200,
        resizeMode:'contain'
        
        
    },
    right:{
        padding:10,
        flex:1,
        
    },
    text1:{
        fontSize:18,
         
        

    },
    text2:{
        fontSize:18,
        fontWeight:'bold',
    },
    rating:{
         flexDirection:'row',
         alignItems:'center '
    },
    star:{
        margin:2,
    }

  });
   
  export default styles;
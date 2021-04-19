import React, {useState} from "react"
import {Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from "react-native"

import watetingImg from "../assets/watering.png"
import colors from "../styles/colors"
import {Button} from "../components/Button"

export function Welcome(){
   const [visible,setVisible] = useState(false)

   const handleVisibility = ()=>{
       setVisible(true)
   }

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gerencie {`\n`}
       suas plantas {`\n`}
       de forma fácil</Text>
   { visible && <Image style={styles.image} source={watetingImg}/>}
    <Text style={styles.subtitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar. </Text>
    <Button onPress={handleVisibility} title=">"/>
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:`center`,
        justifyContent:`space-between`
    },
    title:{
        fontSize:32,
        fontWeight: `bold`,
        textAlign:`center`,
        color:colors.heading,
        marginTop:38
    },
    subtitle:{
        textAlign:`center`,
        fontSize:18,
        paddingHorizontal:20,
        color:colors.heading
    },
    button:{
        backgroundColor:colors.green,
        justifyContent:`center`,
        alignItems:`center`,
        borderRadius:16,
        marginBottom:10,
        height:56,
        paddingHorizontal:10
    },
    image:{
        width:292,
        height:284
    },
    buttonText:{
        color:colors.white,
        fontSize:24
    }
})
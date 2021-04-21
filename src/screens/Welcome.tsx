import React, {useState} from "react"
import {Text, SafeAreaView, StyleSheet, Image, TouchableOpacity,Dimensions, View} from "react-native"

import watetingImg from "../assets/watering.png"
import colors from "../styles/colors"
import {Feather} from '@expo/vector-icons'
import fonts from "../styles/fonts"
import { useNavigation } from "@react-navigation/core"

export function Welcome(){
    const Navigation = useNavigation()
    
    function handleStart(){
        Navigation.navigate('UserIdentification')
    }

  return(
    <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
      <Text style={styles.title}>Gerencie {`\n`}
       suas plantas de {`\n`}
     forma fácil</Text>
   <Image resizeMode="contain" style={styles.image} source={watetingImg}/>
    <Text style={styles.subtitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar. </Text>
    <TouchableOpacity onPress={handleStart} activeOpacity={0.7} style={styles.button}>
        <Text >
            <Feather style={styles.buttonIcon} name="chevron-right"/>
        </Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    wrapper:{
        flex:1,
        alignItems:`center`,
        justifyContent:`space-around`,
        paddingHorizontal:20
    },
    title:{
        fontSize:28,
        fontWeight: `bold`,
        textAlign:`center`,
        color:colors.heading,
        marginTop:38,
        fontFamily:fonts.heading,
        lineHeight:34
    },
    subtitle:{
        textAlign:`center`,
        fontSize:18,
        paddingHorizontal:20,
        color:colors.heading,
        fontFamily:fonts.text
    },
    button:{
        backgroundColor:colors.green,
        justifyContent:`center`,
        alignItems:`center`,
        borderRadius:16,
        marginBottom:10,
        height:56,
        width:56
    },
    image:{
        height: Dimensions.get(`window`).width * 0.7
    },
    buttonIcon:{
        color:colors.white,
        fontSize:24
    }
})
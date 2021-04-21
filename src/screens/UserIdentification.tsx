import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/core"

export function UserIdentification() {
  const Navigation = useNavigation()
    
  function handleSubmit(){
      Navigation.navigate('Confirmation')
  }

    const [isFocused,setIsFocused] = useState(false)
    const [isFilled,setIsFilled] = useState(false)
    const [name, setName] = useState<string>()

  
    const handleInputBlur = () =>{
       setIsFocused(false)
       setIsFilled(!!name)
    }
    const handleInputFocus = () =>{
        setIsFocused(true)
    }

    const handleInputChange = (value:string)=>{
        setIsFilled(!!value)
        setName(value)
    }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === `ios` ? `padding` : `height`}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.emoji}>
                  {isFilled ? `😆`:`😀`}</Text>
              <Text style={styles.title}>
                Como podemos{"\n"}
                chamar você?
              </Text>
            </View>
            <TextInput onChangeText={handleInputChange} onBlur={handleInputBlur} onFocus={handleInputFocus} style={[styles.input, (isFocused || isFilled) && {borderColor:colors.green}]} placeholder={`Digite um nome`} />
            <View style={styles.footer}>
              <Button title="Confirmar" onPress={handleSubmit} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: `100%`,
    alignItems: `center`,
    justifyContent: `space-around`,
  },
  content: {
    flex: 1,
    width: `100%`,
  },
  form: {
    flex: 1,
    justifyContent: `center`,
    paddingHorizontal: 54,
    alignItems: `center`,
  },
  title: {
    marginTop: 20,
    fontSize: 24,
    lineHeight: 32,
    textAlign: `center`,
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: `100%`,
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: `center`,
  },
  footer: {
    marginTop: 40,
    width: `100%`,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: `center`,
  },
});

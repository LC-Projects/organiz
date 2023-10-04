import React from 'react'
import { View, StyleSheet, TextInput, Image } from "react-native";
import { COLORS, THEME } from "../constants";

const Input = ({text, value, onChangeText, secureTextEntry}) => {
  return (
    <View>
        <TextInput style={styles} secureTextEntry={secureTextEntry} placeholder={text} value={value} onChangeText={onChangeText}/>
        <Image/>
    </View>
  )
}

const styles = StyleSheet.create({
    padding:10,
    margin:10,
    borderRadius:10,
    fontSize: THEME.font.size.l,
    backgroundColor:COLORS.light_gray,
    color:COLORS.black,
})
export default Input
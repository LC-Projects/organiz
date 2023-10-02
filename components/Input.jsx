import React from 'react'
import { View, StyleSheet, TextInput, Image } from "react-native";
import { COLORS, THEME } from "../constants";

const Input = ({text}) => {
  return (
    <View>
        <TextInput style={styles} placeholder={text}/>
        <Image/>
    </View>
  )
}

const styles = StyleSheet.create({
    padding:10,
    margin:10,
    borderRadius:10,
    fontSize: THEME.font.size.l,
    backgroundColor:COLORS.ultralight_gray,
    color:COLORS.light_gray,
})
export default Input
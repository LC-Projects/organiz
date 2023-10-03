import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS, THEME } from "../constants";

const ButtonSubmit = ({onPress, text, image = ""}) => {
  return (
      <TouchableOpacity style={styles.container} onPress={onPress} >
        <Image source={image}/>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      padding:10,
      margin:10,
      backgroundColor:COLORS.dark_purple,
      borderRadius:10,
    },
    text: {
      color:COLORS.white,
      fontSize: 20,
      textAlign: 'center',
    }

})
export default ButtonSubmit
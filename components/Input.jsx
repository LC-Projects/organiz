import React from 'react'
import { View, StyleSheet, TextInput, Image } from "react-native";
import { COLORS, THEME } from "../constants";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Input = ({placeholder, value, onChangeText, password}) => {
  return (
    <View>
        <TextInput style={styles} password={password} placeholder={placeholder} value={value} onChangeText={onChangeText}/>
        {/* <Icon name="hide" size={25} color={COLORS.black} /> */}
        {/* <Image/> */}
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
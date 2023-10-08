import React, { useState } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { COLORS, THEME } from "../constants";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Input = ({ placeholder, value, onChangeText, secureTextEntry = false }) => {
  // Initialization
  const [visibility, setVisibility] = useState(!secureTextEntry)

  // Handler
  function handleVisibility() {
    setVisibility(!visibility)
  }

  // Render
  return (
    <KeyboardAvoidingView style={StyleSheet.container} >
      <TextInput style={styles.input} secureTextEntry={secureTextEntry && !visibility} placeholder={placeholder} value={value} onChangeText={onChangeText} />

      {secureTextEntry && <TouchableOpacity style={styles.icon} onPress={() => handleVisibility()} >
        {visibility ? <Icon name="visibility" size={25} color={COLORS.black} /> : <Icon name="visibility-off" size={25} color={COLORS.black} />}
      </TouchableOpacity>}
    </KeyboardAvoidingView>
  )
}

export default Input

// Style
const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: THEME.font.size.l,
    backgroundColor: COLORS.light_gray,
    color: COLORS.black,
  },
  icon: {
    position: 'absolute',
    top: '30%',
    bottom: 0,
    right: 20,
  }
})
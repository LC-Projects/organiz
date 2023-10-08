import React, { useContext, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { appContext } from "../../../../../context/appContext";
import { COLORS, THEME } from "../../../../../constants";
import Input from "../../../../../components/Input.jsx"

const InputWithLabel = ({ setNewInput, label, placeholder, value, secure }) => {
  // Context
  const { mode } = useContext(appContext);
  
  // Render
  return (
    <>
      <Text style={[styles.subtitle, { color: mode.contrastText }]}
      >
        {label}
      </Text>
      <Input
        text={placeholder}
        value={value}
        secureTextEntry={secure}
        onChangeText={setNewInput}
      ></Input>
    </>
  );
};

export default InputWithLabel;

// Style
const styles = StyleSheet.create({
  subtitle: {
    marginTop: 20,
    fontSize: THEME.font.size.m,
    marginLeft: 20,
    fontWeight: "600",
  },
});

import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { appContext } from "../../../../context/appContext";
import { COLORS, THEME } from "../../../../constants";

const Input = ({ label, placeholder, value, onChangeText }) => {
  const { backgroundColor, setBackgroundColor } = useContext(appContext);

  return (
    <>
      <Text
        style={[
          styles.subtitle,
          backgroundColor ? { color: COLORS.light } : { color: COLORS.dark },
        ]}
      >
        {label}
      </Text>
      <Input
        text={placeholder}
        value={value}
        onChangeText={onChangeText}
      ></Input>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 20,
    fontSize: THEME.font.size.m,
    marginLeft: 20,
    fontWeight: "600",
  },
});

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS, THEME } from "../constants";

const ButtonSubmit = ({ onPress, text, style, textColor = false, image = null }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image source={image} style={styles.img} />
      <Text style={[styles.text, textColor && {color: textColor}]}>{text}</Text>
      <View style={styles.img} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: COLORS.dark_purple,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    height: 25,
    width: 25,
    objectFit: "contain",
  },
  text: {
    color: COLORS.white,
    fontSize: 20,
    textAlign: "center",
  },
});
export default ButtonSubmit;

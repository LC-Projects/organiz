import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../constants";

const Dots = ({ color = null, horizontal = false }) => {
  return (
    <View style={[styles.dots_actions, horizontal && {flexDirection: "row", justifyContent: "center"}]}>
      <View style={[styles.dot, color && {backgroundColor: color}]}></View>
      <View style={[styles.dot, color && {backgroundColor: color}]}></View>
      <View style={[styles.dot, color && {backgroundColor: color}]}></View>
    </View>
  );
};

export default Dots;

const styles = StyleSheet.create({
  dots_actions: {
    gap: 4,
    alignSelf: "center",
    flex: 1,
  },
  dot: {
    backgroundColor: COLORS.white,
    height: 4,
    width: 4,
    borderRadius: 4,
  },
});

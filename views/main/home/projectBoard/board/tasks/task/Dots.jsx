import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../../../../../constants";

const Dots = () => {
  return (
    <View style={styles.dots_actions}>
      <View style={styles.dot}></View>
      <View style={styles.dot}></View>
      <View style={styles.dot}></View>
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

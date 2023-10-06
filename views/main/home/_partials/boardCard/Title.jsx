import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../../../../../constants";

const Title = ({ value }) => {
  return (
    <View style={styles.middleBoard}>
      <Text style={styles.textBoard}>{value}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  middleBoard: {
    textAlign: "left",
    margin: 10,
  },
  textBoard: {
    margin: 10,
    fontSize: THEME.font.size.xl,
    fontWeight: "800",
  },
});

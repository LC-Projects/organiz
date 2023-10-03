import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, THEME } from "../../../constants";
import Dots from "./Dots";

const Task = ({ tag }) => {
  return (
    <View style={styles.task}>
      <View style={[styles.tag, {backgroundColor: tag}]}></View>
      <Text style={styles.title}>Create Homepage</Text>
      <Dots />
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  task: {
    backgroundColor: COLORS.light_gray,
    flexDirection: "row",
    marginTop: THEME.spacing.xs,
    padding: THEME.spacing.xs,
    borderRadius: THEME.border.s,
    columnGap: THEME.spacing.xs,
  },
  tag: {
    backgroundColor: COLORS.urgent_red,
    width: 4,
    borderRadius: 2,
  },
  title: {
    color: COLORS.white,
    fontSize: THEME.font.size.m,
    fontWeight: THEME.font.weight.bold,
    flex: 100,
  },
});

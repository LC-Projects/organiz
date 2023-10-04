import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, ROUTES, THEME } from "../../../../constants";
import Dots from "./Dots";

const Task = ({ navigation, title, tag, keyName }) => {

  return (
    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.TASKSETTINGS, { "taskId": keyName })}>
      <View style={styles.task}>
        <View style={[styles.tag, {backgroundColor: tag}]}></View>
        <Text style={styles.title}>{title}</Text>
        <Dots />
      </View>
    </TouchableOpacity>
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

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Dots from "../../../../../../../components/button/ButtonSetting/Dots";
import { COLORS, ROUTES, THEME } from "../../../../../../../constants";

const Task = ({ percentage, navigation, boardId, column, title, tag, taskId }) => {

  return (
    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.TASKSETTINGS, { "percentage":percentage, title: title, "boardId": boardId, "column":column, "taskId": taskId, "title": title, "tag": tag})}>
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
    backgroundColor: COLORS.light_purple,
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

import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Tasks from "./tasks/Tasks";
import { COLORS, THEME } from "../../../../../constants";

const Board = ({ navigation, boardId, title, data, keyName }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.headerCounte}>{data?.length}</Text>
        </View>

        <Tasks navigation={navigation} boardId={boardId} data={data} keyName={keyName} />
      </View>
    </ScrollView>
  );
};

export default Board;

const styles = StyleSheet.create({
  container: {
    margin: THEME.spacing.s,
    padding: THEME.spacing.s,
    backgroundColor: COLORS.white,
    borderRadius: THEME.border.m,
  },
  header: {
    flexDirection: "row",
  },
  headerTitle: {
    flex: 1,
    fontSize: THEME.font.size.xl,
    fontWeight: THEME.font.weight.bold,
  },
  headerCounte: {
    flex: 1,
    textAlign: "right",
    fontSize: THEME.font.size.xl,
    fontWeight: THEME.font.weight.bold,
  },
});

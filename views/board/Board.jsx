import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { COLORS, THEME } from "../../constants";
import Tasks from "./tasks/Tasks";

const Board = () => {
  const [data, setData] = useState([
    {
      id: 1,
      tag: "#AEE779",
      title: "Create Homepage",
    },
    {
      id: 2,
      tag: "#FF7081",
      title: "Create Homepage",
    },
    {
      id: 3,
      tag: "#F7F6B4",
      title: "Create Homepage",
    },
    {
      id: 4,
      tag: "#4EDCEB",
      title: "Create Homepage",
    },
  ]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Todo</Text>
          <Text style={styles.headerCounte}>{data.length}</Text>
        </View>

        <Tasks data={data} />
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

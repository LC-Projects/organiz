import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { COLORS, THEME } from "../../constants";

const Board = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Todo</Text>
          <Text style={styles.headerCounte}>4</Text>
        </View>

        <View style={styles.tasks}>

        </View>
      </View>
    </ScrollView>
  );
};

export default Board;

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    margin: THEME.spacing.s,
    padding: THEME.spacing.s,
    backgroundColor: COLORS.white,
    borderRadius: THEME.border.m
  },
  headerTitle: {
    flex: 1,
    fontSize: THEME.font.size.xl,
    fontWeight: THEME.font.weight.bold,
  },
  headerCounte: {
    flex: 1,
    textAlign: 'right',
    fontSize: THEME.font.size.xl,
    fontWeight: THEME.font.weight.bold,
  },

  tasks: {

  }
});

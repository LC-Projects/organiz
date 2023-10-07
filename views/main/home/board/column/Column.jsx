import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Tasks from "./tasks/Tasks";
import { COLORS, THEME } from "../../../../../constants";
import InputWrapper from "../../../../../components/wrapper/InputWrapper";
import ProgressBar from "../../../../../components/ProgressBar";

const Column = ({ percentage, navigation, boardId, title, data, keyName }) => {
 
  return (
    <ScrollView style={styles.container} >
      <InputWrapper style={styles.percentage}>
        <ProgressBar percentage={percentage} />
      </InputWrapper>

      <View style={styles.boardContainer} >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.headerCounte}>{data?.length}</Text>
        </View>

        <Tasks
          percentage={percentage}
          navigation={navigation}
          boardId={boardId}
          data={data}
          keyName={keyName}
        />
      </View>
    </ScrollView>
  );
};

export default Column;

const styles = StyleSheet.create({
  container: {
    margin: THEME.spacing.s,
  },
  boardContainer: {
    padding: THEME.spacing.s,
    backgroundColor: COLORS.white,
    borderRadius: THEME.border.m,
  },
  percentage: {
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 10,
    marginBottom: THEME.spacing.xs,
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

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, THEME } from "../../../../../constants";

const Ratio = ({ data }) => {
  return (
    <View style={styles.statusBoard}>
      <Text style={[styles.firstvalue, styles.fontSize]}>
        {data?.todo?.filter(e => e !== undefined) ? data?.todo?.filter(e => e !== undefined).length : 0}
      </Text>

      <Text style={styles.fontSize}> / </Text>

      <Text style={[styles.secondvalue, styles.fontSize]}>
        {data?.doing?.filter(e => e !== undefined) ? data?.doing?.filter(e => e !== undefined).length : 0}
      </Text>

      <Text style={styles.fontSize}> / </Text>

      <Text style={[styles.thirdvalue, styles.fontSize]}>
        {data?.done?.filter(e => e !== undefined) ? data?.done?.filter(e => e !== undefined).length : 0}
      </Text>
    </View>
  );
};

export default Ratio;

const styles = StyleSheet.create({
  statusBoard: {
    flexDirection: 'row',
    flex: 3
  },
  firstvalue: {
    color: COLORS.green
  },
  secondvalue: {
    color: COLORS.blue
  },
  thirdvalue: {
    color: COLORS.orange
  },
  fontSize: {
    fontSize: THEME.font.size.m
  }
})
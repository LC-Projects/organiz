import { View, Text, StyleSheet, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { COLORS, THEME } from "../constants";

const ProgressBar = ({ percentage }) => {
  const width = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(width, {
      toValue: percentage,
      duration: 5000,
      useNativeDriver: false
    }).start();
  }, [width]);

  return (
    <View style={styles.container}>
      <View style={styles.ProgessBarParent}>
        <Animated.View style={[styles.ProgessBarChild, {width: width.interpolate({
          inputRange: [0, percentage],
          outputRange: ['0%', `${percentage}%`],
        })}]} />
      </View>
      <Text style={styles.percentage}>{percentage} %</Text>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: THEME.spacing.s,
  },
  ProgessBarParent: {
    backgroundColor: COLORS.light_gray,
    position: "relative",
    borderRadius: 10,
    flex: 7,
    height: 10,
  },
  ProgessBarChild: {
    position: "absolute",
    backgroundColor: COLORS.dark_purple,
    borderRadius: 10,
    height: 10,
  },
  percentage: {
    flex: 1,
  },
});

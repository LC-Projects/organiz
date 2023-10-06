import { View, Text, StyleSheet, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { COLORS, THEME } from "../constants";

const ProgressBar = ({ percentage }) => {
  const width = useRef(new Animated.Value(0)).current;
  console.log(width);

  useEffect(() => {
    Animated.timing(width, {
      toValue: percentage,
      duration: 10000,
      useNativeDriver: false,
    }).start();

    console.log(width);
  }, [width]);

  return (
    <View style={styles.container}>
      <View style={styles.ProgessBarParent}>
        <Animated.View
          style={[styles.ProgessBarChild ]}
        />
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
    backgroundColor: COLORS.medium_purple,
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

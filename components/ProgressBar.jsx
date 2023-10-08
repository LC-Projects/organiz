import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import React, { useEffect } from "react";
import { COLORS, THEME } from "../constants";
import InputWrapper from "./wrapper/InputWrapper";

const ProgressBar = ({ percentage, displayAsInput = false }) => {
  // Animation
  const width = new Animated.Value(0);
  const widthAsString = width.interpolate({
    inputRange: [0, percentage],
    outputRange: ['0%', `${percentage}%`],
  })

  // Hook
  useEffect(() => {
    Animated.timing(width, {
      toValue: percentage,
      duration: 1000,
      easing: Easing.bounce,
      useNativeDriver: false
    }).start();
  }, [width]);

  return (
    <>
      {
        displayAsInput ?

          <InputWrapper style={styles.inputWrapper} >
            <View style={styles.container}>
              <View style={styles.ProgessBarParent}>
                <Animated.View style={[styles.ProgessBarChild, { width: widthAsString }]} />
              </View>
              <Text style={styles.percentage}>{percentage} %</Text>
            </View>
          </InputWrapper>

          :

          <View style={styles.container}>
            <View style={styles.ProgessBarParent}>
              <Animated.View style={[styles.ProgessBarChild, { width: widthAsString }]} />
            </View>
            <Text style={styles.percentage}>{percentage} %</Text>
          </View>
      }
    </>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: THEME.spacing.s,
  },
  inputWrapper: {
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 10,
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

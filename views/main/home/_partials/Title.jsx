import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS, STRINGS } from "../../../../constants";
import { appContext } from "../../../../context/appContext";

const Title = () => {
  // Initialization
  const { backgroundColor } = useContext(appContext);

  //   Render
  return (
    <Text
      style={[
        styles.text,
        backgroundColor ? { color: COLORS.light } : { color: COLORS.dark },
      ]}
    >
      {STRINGS.BOARDS}
    </Text>
  );
};

export default Title;

// Style
const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.white,
  },
});

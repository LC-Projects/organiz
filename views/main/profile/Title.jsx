import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { appContext } from "../../../context/appContext";
import { COLORS, THEME } from "../../../constants";

const Title = () => {
  // Context
  const { backgroundColor, setBackgroundColor } = useContext(appContext);

  // Render
  return (
    <Text
      style={[
        styles.title,
        backgroundColor ? { color: COLORS.light } : { color: COLORS.dark },
      ]}
    >
      Personnal modification
    </Text>
  );
};

export default Title;

// Style
const styles = StyleSheet.create({
  title: {
    fontSize: THEME.font.size.l,
    textAlign: "center",
    fontWeight: "600",
  },
});

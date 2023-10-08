import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { appContext } from "../../../context/appContext";
import { THEME } from "../../../constants";

const Title = () => {
  // Context
  const { mode } = useContext(appContext);

  // Render
  return (
    <Text style={[styles.title, { color: mode.contrastText }]}>
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

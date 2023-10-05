import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import DataBoard from "../../../components/DataBoard";
import { COLORS, STRINGS, THEME } from "../../../constants";

const RatioBoard = () => {
  // Initialization
  const data = [
    { value: 4, title: STRINGS.BOARDS, color: COLORS.dark_purple, separator: true },
    { value: 10, title: STRINGS.TODO, color: COLORS.green },
    { value: 4, title: STRINGS.DOING, color: COLORS.blue },
    { value: 6, title: STRINGS.DONE, color: COLORS.orange },
  ];

  
  //   Render
  return (
    <ScrollView horizontal={true} style={styles.container}>
      {data?.map((e, key) => (
        <DataBoard
          key={key}
          value={e.value}
          text={e.title}
          valueColor={e.color}
          separator={e?.separator}
        />
      ))}
    </ScrollView>
  );
};

export default RatioBoard;


// Style
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginTop: "-10%",
    marginLeft: THEME.spacing.m,
    marginRight: THEME.spacing.m,
    marginBottom: THEME.spacing.m,
  },
});

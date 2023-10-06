import React, { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import DataBoard from "../../../components/DataBoard";
import { COLORS, STRINGS, THEME } from "../../../constants";

const RatioBoard = ({ dataBoard }) => {
  // Initialization
  let todo = 0;
  let doing = 0;
  let done = 0;
  let board = (dataBoard ? dataBoard?.length : 0);
  dataBoard?.forEach(DataBoard => {
    todo += (DataBoard?.todo ? DataBoard?.todo?.length : 0);
    doing += (DataBoard?.doing ? DataBoard?.doing?.length : 0);
    done += (DataBoard?.done ? DataBoard?.done?.length : 0);
  });
  
  const data = [
    { value: (board), title: STRINGS.BOARDS, color: COLORS.dark_purple, separator: true },
    { value: (todo), title: STRINGS.TODO, color: COLORS.green },
    { value: (doing), title: STRINGS.DOING, color: COLORS.blue },
    { value: (done), title: STRINGS.DONE, color: COLORS.orange },
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

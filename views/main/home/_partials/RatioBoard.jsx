import React, { useContext } from "react";
import { ScrollView, StyleSheet } from "react-native";
import DataBoard from "../../../../components/DataBoard";
import { COLORS, STRINGS, THEME } from "../../../../constants";
import { appContext } from "../../../../context/appContext";

const RatioBoard = ({ data }) => {
  // Context
  const { mode } = useContext(appContext)

  // Initialization
  let todo = 0, doing = 0, done = 0;
  data?.forEach(DataBoard => {
    todo += ((DataBoard?.todo?.filter(e => e !== undefined)?.length) ? (DataBoard?.todo?.filter(e => e !== undefined)?.length) : 0);
    doing += ((DataBoard?.doing?.filter(e => e !== undefined)?.length) ? (DataBoard?.doing?.filter(e => e !== undefined)?.length) : 0);
    done += ((DataBoard?.done?.filter(e => e !== undefined)?.length) ? (DataBoard?.done?.filter(e => e !== undefined)?.length) : 0);
  });
  
  const board = ((data?.length) ? (data?.length) : 0);
  const ratioData = [
    { value: (board), title: STRINGS.BOARDS, color: COLORS.dark_purple, separator: true },
    { value: (todo), title: STRINGS.TODO, color: COLORS.green },
    { value: (doing), title: STRINGS.DOING, color: COLORS.blue },
    { value: (done), title: STRINGS.DONE, color: COLORS.orange },
  ];  

  //   Render
  return (
    <ScrollView horizontal={true} style={[ styles.container, {backgroundColor: mode.homepage.ratioBoard} ]}>
      {ratioData && ratioData?.map((e, key) => (
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

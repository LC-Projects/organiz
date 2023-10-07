import React, { useContext, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ROUTES, THEME } from "../../../../constants";
import BoardCard from "./boardCard/BoardCard";
import { calculatePercentage } from "../../../../utils/maths";
import { appContext } from "../../../../context/appContext";

const BoardContainer = ({ data, navigation }) => {
  // Context
  const { refresh } = useContext(appContext)

  // Hook
  useEffect(() => {}, [data, refresh])

  // Render
  return (
    <View style={styles.boards}>
      {data &&
        data?.map((element, key) => (

          <TouchableOpacity
            key={key}
            onPress={() =>
              navigation.navigate(ROUTES.PROJECTBOARD, {
                boardId: key,
                name: element.title,
                title: element.title,
                status: element.status,
                percentage: calculatePercentage(element)
              })
            }
          >
            <BoardCard data={element} />
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default BoardContainer;

// Style
const styles = StyleSheet.create({
  boards: {
    paddingLeft: THEME.spacing.m,
    paddingRight: THEME.spacing.m,
    paddingBottom: 40,
  },
});

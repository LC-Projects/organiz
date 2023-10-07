import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ROUTES, THEME } from "../../../../constants";
import BoardCard from "./boardCard/BoardCard";
import { calculatePercentage } from "../../../../utils/maths";

const BoardContainer = ({ data, navigation }) => {
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
            <BoardCard data={element}/>
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

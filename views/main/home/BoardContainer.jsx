import React, { useContext, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ROUTES, THEME } from "../../../constants";
import Board from "../../../components/Board";

const BoardContainer = ({ data, navigation }) => {
  return (
    <View style={styles.boards}>
      {data &&
        data?.map((element, key) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(ROUTES.PROJECTBOARD, { boardId: key })
            }
          >
            <Board
              key={key}
              importance="High"
              importanceColor={element?.important}
              title={element?.title}
              percentage={68}
            />
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

import React from "react";
import Board from "../views/board/Board";
import { ROUTES } from "../constants";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Access = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.BOARD} component={Board} />
    </Stack.Navigator>
  );
};

export default Access;

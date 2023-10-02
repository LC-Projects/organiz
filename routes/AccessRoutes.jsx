import React from "react";
import { ROUTES } from "../constants";
import { createStackNavigator } from "@react-navigation/stack";
import Board from "../views/board/Board";
import Homepage from "../views/home/Homepage";

const Stack = createStackNavigator();

const Access = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.HOMEPAGE} component={Homepage} />
      <Stack.Screen name={ROUTES.BOARD} component={Board} />
    </Stack.Navigator>
  );
};

export default Access;

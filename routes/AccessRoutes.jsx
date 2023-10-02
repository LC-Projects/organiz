import React from "react";
import { ROUTES } from "../constants";
import { createStackNavigator } from "@react-navigation/stack";
import Board from "../views/board/Board";
import ProjectBoard from "../views/projectBoard/ProjectBoard";
import Homepage from "../views/home/Homepage";

const Stack = createStackNavigator();

const Access = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.HOMEPAGE} component={Homepage} />
      {/* <Stack.Screen name={ROUTES.HOMEPAGE} component={ProjectBoard} /> */}
      {/* <Stack.Screen name={ROUTES.BOARD} component={Board} /> */}
      <Stack.Screen name={ROUTES.PROJECTBOARD} component={ProjectBoard} />
    </Stack.Navigator>
  );
};

export default Access;

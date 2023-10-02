import React from "react";
import { ROUTES } from "../constants";
import { createStackNavigator } from "@react-navigation/stack";
import ProjectBoard from "../views/projectBoard/ProjectBoard";

const Stack = createStackNavigator();

const Access = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.BOARD} component={ProjectBoard} />
    </Stack.Navigator>
  );
};

export default Access;

import React from "react";
import { ROUTES } from "../constants";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "../views/main/home/Homepage";
import Main from "../views/main/Main";
import ProjectBoard from "../views/main/home/projectBoard/ProjectBoard";
import Settings from "../views/main/home/projectBoard/board/tasks/settings/Settings";

const Stack = createStackNavigator();

const Access = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.HOMEPAGE} component={Main} options={{headerShown: false}} />
      {/* <Stack.Screen name={ROUTES.HOMEPAGE} component={ProjectBoard} /> */}
      {/* <Stack.Screen name={ROUTES.BOARD} component={Board} /> */}
      <Stack.Screen name={ROUTES.PROJECTBOARD} component={ProjectBoard} />
      <Stack.Screen name={ROUTES.TASKSETTINGS} component={Settings} />
    </Stack.Navigator>
  );
};

export default Access;

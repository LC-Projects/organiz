import React from "react";
import { ROUTES } from "../constants";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../views/auth/login/Login";
import Register from "../views/auth/register/Register";
import Board from "../views/board/Board";
import Homepage from "../views/home/Homepage";

const Stack = createStackNavigator();

const Access = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.BOARD} component={Board} />
      <Stack.Screen name={ROUTES.HOMEPAGE} component={Homepage} />
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};

export default Access;

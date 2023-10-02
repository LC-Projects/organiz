import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../views/auth/login/Login";


const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Auth;

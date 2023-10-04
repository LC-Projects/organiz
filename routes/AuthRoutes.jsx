import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../views/auth/login/Login";
import Register from "../views/auth/register/Register";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="register" component={Register} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default Auth;

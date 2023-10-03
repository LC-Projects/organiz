import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Homepage from "./Homepage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../../constants";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.bottomBar,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Homepage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Homepage}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: COLORS.dark_gray,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.75,
    elevation: 10,
    borderWidth: 0
  },
});

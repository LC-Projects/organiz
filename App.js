import { useState } from "react";
import { StyleSheet } from "react-native";
import { ROUTES } from "./constants";
import Board from "./views/board/Board";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Access from "./routes/AccessRoutes";
import Auth from "./routes/AuthRoutes";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(false);

  return (
    <NavigationContainer>{!user ? <Auth /> : <Access />}</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

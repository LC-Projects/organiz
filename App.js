import { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Access from "./routes/AccessRoutes";
import Auth from "./routes/AuthRoutes";
import { userContext } from "./context/userContext";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(false)
  const userContextValues = {user, setUser}

  useEffect(() => {
  }, [user])
  
  return (
    <userContext.Provider value={userContextValues}>
      <NavigationContainer>{!user ? <Auth/> : <Access />}</NavigationContainer>
    </userContext.Provider>
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

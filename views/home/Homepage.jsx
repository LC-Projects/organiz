import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ROUTES, THEME } from "../../constants";
import { userContext } from "../../context/userContext";

const Homepage = ({navigation}) => {
  const {user, setUser} = useContext(userContext)
  
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <Button title="Board" onPress={() => navigation.navigate(ROUTES.BOARD)} />
        <Button title="Disconnect" onPress={() => setUser(false)} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {},
    header: {
      flexDirection: "row",
    }
})

export default Homepage

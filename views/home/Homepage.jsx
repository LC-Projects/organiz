import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ROUTES } from "../../constants";

const Homepage = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <Button title="Board" onPress={() => navigation.navigate(ROUTES.BOARD)} />
      </View>
    </SafeAreaView>
  )
}

export default Homepage
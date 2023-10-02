import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ROUTES } from "../../../constants";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Login</Text>
        <Button title="Board" onPress={() => navigation.navigate(ROUTES.BOARD)} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

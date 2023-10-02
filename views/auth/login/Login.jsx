import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ROUTES } from "../../../constants";
import { TextInput } from "react-native-gesture-handler";

const Login = ({ navigation }) => {
  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")

  function Submit(e) {
    eventPreventDefault();
    console.log(e);
  }
  return (
    <SafeAreaView>
      <View>
        <Text>Page of Sign In</Text>
        <TextInput placeholder="Insert your Login"></TextInput>
        <TextInput placeholder="Insert your Password" ></TextInput>
        <Button title="Go to register" onPress={() => navigation.navigate(ROUTES.REGISTER)} />
        <Button title="Home" onPress={() => navigation.navigate(ROUTES.HOMEPAGE)} />

        <Button title="Login" onPress={(e) => {Submit(e)}} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ROUTES } from "../../../constants";

const Register = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Sign Up</Text>
        <Button title="Already Sign In" onPress={() => navigation.navigate(ROUTES.LOGIN)} />
      </View>
    </SafeAreaView>
  )
}

export default Register
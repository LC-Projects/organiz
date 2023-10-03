import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, Keyboard, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ROUTES, THEME } from "../../../constants";
import ButtonSubmit from "../../../components/ButtonSubmit";
import Input from "../../../components/Input";
import { userContext } from "../../../context/userContext";
import { connectUser } from "../../../api/firebase/authUtils";

const Login = ({ navigation }) => {
  const { user, setUser } = useContext(userContext);

  const [errMessage, setErrMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    Keyboard.dismiss();
    try {
      setUser(await connectUser(email, password));
    } catch (err) {
      setUser(false);
      Alert.alert("User or Password is incorrect");
    }
  }

  return (
    <SafeAreaView>
      {errMessage && <Text>{errMessage}</Text>}
      <View>
        {/* <Image source="" /> */}
        <Input text="Email" value={email} onChangeText={(e) => setEmail(e)} />
        <Input
          text="Password"
          value={password}
          onChangeText={(e) => setPassword(e)}
        />
        <ButtonSubmit onPress={() => handleSubmit()} text="Login" />
        <Text style={styles.text}>You don't have an account yet ?</Text>
        <Text
          style={styles.redirect}
          onPress={() =>
            navigation.navigate(ROUTES.REGISTER, { screen: ROUTES.REGISTER })
          }
        >
          Sign up now !
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    margin: 10,
    borderColor: "black",
    borderWidth: 2,
    textAlign: "center",
    borderRadius: 1,
  },
  text: {
    marginTop: 20,
    textAlign: "center",
  },
  redirect: {
    textAlign: "center",
    fontWeight: "800",
    color: "purple",
  },
});

export default Login;

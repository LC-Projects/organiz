import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Keyboard, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, ROUTES } from "../../../constants";
import ButtonSubmit from "../../../components/ButtonSubmit";
import Input from "../../../components/Input";
import { userContext } from "../../../context/userContext";
import { connectUser } from "../../../api/firebase/authUtils";
import { appContext } from "../../../context/appContext";
import AuthBottomMessage from "../../../components/AuthBottomMessage";
import Hero from "./_partials/Hero";


const Login = ({ navigation }) => {
  // Context
  const { user, setUser } = useContext(userContext);
  const { backgroundColor } = useContext(appContext)

  // Initialization
  const [errMessage, setErrMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handler
  async function handleSubmit() {
    Keyboard.dismiss();
    try {
      setUser(await connectUser(email, password));
    } catch {
      setUser(false);
      Alert.alert("User or Password is incorrect");
    }
  }


  // Render
  return (
    <SafeAreaView style={[styles.container, backgroundColor ? { backgroundColor: COLORS.dark } : { backgroundColor: COLORS.light }]}>
      {errMessage && <Text>{errMessage}</Text>}
      <View>
        <Hero />
        <Input placeholder="Email" value={email} onChangeText={(e) => setEmail(e)} />
        <Input
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(e) => setPassword(e)}
        />
        <ButtonSubmit onPress={() => handleSubmit()} text="Login" />
        {/* <SeparatorWithLabel label="Or" />
        <ButtonSubmit onPress={() => connectUserWithGoogle()} text={"Login with Google"} image={IMGS.logo.google} style={styles.google} textColor={COLORS.black} /> */}
        <AuthBottomMessage
          message="You don't have an account yet?"
          button="Sign up now!"
          link={() => navigation.navigate(ROUTES.REGISTER, { screen: ROUTES.REGISTER })}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  google: {
    backgroundColor: COLORS.light,
    borderColor: COLORS.black,
    borderWidth: 2,
  }
});
import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Keyboard, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, IMGS, ROUTES, THEME } from "../../../constants";
import ButtonSubmit from "../../../components/ButtonSubmit";
import Input from "../../../components/Input";
import { userContext } from "../../../context/userContext";
import { connectUser } from "../../../api/firebase/authUtils";
import LottieView from "lottie-react-native";
import { appContext } from "../../../context/appContext";
import AuthBottomMessage from "../../../components/AuthBottomMessage";
import SeparatorWithLabel from "../../../components/SeparatorWithLabel";


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
    } catch (err) {
      setUser(false);
      Alert.alert("User or Password is incorrect");
    }
  }

  // Render
  return (
    <SafeAreaView style={[styles.container, backgroundColor ? { backgroundColor: COLORS.dark } : { backgroundColor: COLORS.light }]}>
      {errMessage && <Text>{errMessage}</Text>}
      <View>
        <View style={styles.loginImg}>
          <LottieView source={IMGS.json.login} autoPlay loop style={{ transform: [{ scale: 1.4 }] }} />
        </View>

        <Input placeholder="Email" value={email} onChangeText={(e) => setEmail(e)} />
        <Input
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(e) => setPassword(e)}
        />

        <ButtonSubmit onPress={() => handleSubmit()} text="Login" />
        <SeparatorWithLabel label="Or" />
        <ButtonSubmit text={"Login with Google"} image={IMGS.logo.google} style={styles.google} textColor={COLORS.black} />

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
  input: {
    padding: 10,
    margin: 10,
    borderColor: "black",
    borderWidth: 2,
    textAlign: "center",
    borderRadius: 1,
  },
  loginImg: {
    height: '30%',
  },
  google: {
    backgroundColor: COLORS.light,
    borderColor: COLORS.black,
    borderWidth: 2,
  }
});
import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, Keyboard, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, IMGS, ROUTES, THEME } from "../../../constants";
import ButtonSubmit from "../../../components/ButtonSubmit";
import Input from "../../../components/Input";
import { userContext } from "../../../context/userContext";
import { connectUser } from "../../../api/firebase/authUtils";
import LottieView from "lottie-react-native";


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
    <SafeAreaView style={styles.container}>
      {errMessage && <Text>{errMessage}</Text>}
      <View>

        <View style={styles.loginImg}>
          <LottieView source={IMGS.json.login} autoPlay loop style={{ transform: [{scale: 1.2}] }} />
        </View>
        <Input text="Email" value={email} onChangeText={(e) => setEmail(e)} />
        <Input
          text="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(e) => setPassword(e)}
        />
        <ButtonSubmit onPress={() => handleSubmit()} text="Login" />

        {/* Sign Up Message */}
        <View style={styles.message}>
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
        {/* Sign Up Message */}

      </View>
    </SafeAreaView>
  );
};

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
  text: {
    marginTop: 20,
    textAlign: "center",
  },
  redirect: {
    textAlign: "center",
    fontWeight: "800",
    color: "purple",
  },
  loginImg: {
    height: '50%',
    paddingTop: 40,
    // backgroundColor: COLORS.gray
  },
  message: {
    marginTop: 50
  }
});

export default Login;

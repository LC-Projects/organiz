import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Alert, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, IMGS, ROUTES } from "../../../constants";
import ButtonSubmit from "../../../components/ButtonSubmit";
import Input from "../../../components/Input";
import { userContext } from "../../../context/userContext";
import { createUser } from "../../../api/firebase/authUtils";
import LottieView from "lottie-react-native";
import { appContext } from "../../../context/appContext";
import AuthBottomMessage from "../../../components/AuthBottomMessage";

const Register = ({ navigation }) => {
  const { user, setUser } = useContext(userContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { backgroundColor } = useContext(appContext)


  const handleSubmit = async () => {
    Keyboard.dismiss()
    if (password != passwordConfirm) {
      Alert.alert('Passwords are not the same')
    } else {
      try {
        setUser(await createUser(email, password))
      }
      catch (err) {
        setUser(false)
        Alert.alert("Can't create an user: Email or Password is incorrect");
      }
    }
  }
  return (
    <SafeAreaView style={[styles.container, backgroundColor ? { backgroundColor: COLORS.dark } : { backgroundColor: COLORS.light }]}>
      <View>
        <View style={styles.registerImg}>
          <LottieView source={IMGS.json.register} autoPlay loop style={{ transform: [{ scale: 0.9 }] }} />
        </View>

        <Input placeholder="Email" value={email} onChangeText={setEmail} />
        <Input placeholder="Password" value={password} password={true} onChangeText={setPassword} />
        <Input placeholder="Confirm Password" value={passwordConfirm} password={true} onChangeText={setPasswordConfirm} />

        <ButtonSubmit onPress={handleSubmit} text={"Sign Up"} />

        <AuthBottomMessage
          message="Already have an account?"
          button="Sign in now!"
          link={() => navigation.navigate(ROUTES.LOGIN)}
        />
      </View>
    </SafeAreaView>

  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  input: {
    padding: 10,
    margin: 10,
    borderColor: 'black',
    borderWidth: 2,
    textAlign: 'center',
    borderRadius: 1,
  },
  registerImg: {
    height: '40%',
  },
  horizontalBar: {
    height: 2,
    borderRadius: 5,
    margin: 10,
    left: 40,
    right: 40,
  },
})
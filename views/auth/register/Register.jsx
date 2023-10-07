import React, { useContext, useState } from "react";
import { View, StyleSheet, Alert, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, ROUTES } from "../../../constants";
import ButtonSubmit from "../../../components/ButtonSubmit";
import Input from "../../../components/Input";
import { userContext } from "../../../context/userContext";
import { createUser } from "../../../api/firebase/authUtils";
import { appContext } from "../../../context/appContext";
import AuthBottomMessage from "../../../components/AuthBottomMessage";
import Hero from "./_partials/Hero";

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
        Alert.alert(await createUser(email, password))
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
        <Hero />
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
        <Input placeholder="Password" value={password} secureTextEntry={true} onChangeText={setPassword} />
        <Input placeholder="Confirm Password" value={passwordConfirm} secureTextEntry={true} onChangeText={setPasswordConfirm} />
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
  }
})
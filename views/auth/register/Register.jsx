import React, { useContext, useState } from "react";
import { View, StyleSheet, Alert, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ROUTES } from "../../../constants";
import ButtonSubmit from "../../../components/ButtonSubmit";
import Input from "../../../components/Input";
import { userContext } from "../../../context/userContext";
import { createUser } from "../../../api/firebase/authUtils";
import AuthBottomMessage from "../../../components/AuthBottomMessage";
import Hero from "./_partials/Hero";

const Register = ({ navigation }) => {
  // Context
  const { setUser } = useContext(userContext)

  // Initialization
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  // Handler
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

  // Render
  return (
    <SafeAreaView style={[styles.container]}>
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

// Style
const styles = StyleSheet.create({
  container: {
    height: '100%',
  }
})
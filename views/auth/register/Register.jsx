import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, Alert, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ROUTES } from "../../../constants";
import ButtonSubmit from "../../../components/ButtonSubmit";
import Input from "../../../components/Input";
import { userContext } from "../../../context/userContext";
import { createUser } from "../../../api/firebase/authUtils";

const Register = ({navigation}) => {
  const {user, setUser} = useContext(userContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

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
    <SafeAreaView>
      <View>
        <Image/>
        <Input text="Email" value={email} onChangeText={setEmail} />
        <Input text="Password" value={password} secureTextEntry={true} onChangeText={setPassword} />
        <Input text="Confim Password" value={passwordConfirm} secureTextEntry={true} onChangeText={setPasswordConfirm} />
        <ButtonSubmit onPress={handleSubmit} text={"Sign Up"}/>
        <Text style={styles.textBetween}>OR</Text>
        <ButtonSubmit text={"Sign Up with Google"} image={"google"}/>
        <Text style={styles.text}>Already have an account ?</Text>
        <Text style={styles.redirect} onPress={() => navigation.navigate(ROUTES.LOGIN)} >Sign in now !</Text>
      </View>
    </SafeAreaView>
    
  )
}

export default Register

const styles = StyleSheet.create({
  input: {
    padding:10,
    margin:10,
    borderColor:'black',
    borderWidth:2,
    textAlign: 'center',
    borderRadius: 1,
  },
  textBetween: {
    margin:20,
    fontWeight:"600",
    textAlign: 'center',
  },
  text: {
    marginTop:20,
    fontWeight:"800",
    textAlign: 'center',
  },
  redirect: {
    textAlign: 'center',
    fontWeight:"800",
    color:"purple"
  }
})
import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ROUTES, THEME } from "../../../constants";
import ButtonSubmit from "../../../components/ButtonSubmit";
import Input from "../../../components/Input";
import { userContext } from "../../../context/userContext";

const Login = ({ navigation }) => {
  const {user, setUser} = useContext(userContext)
  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit() {
    setUser(true)
  }

  return (
    <SafeAreaView>
      <View>
        <Image source="" />
        <Input text="Email"/>
        <Input text="Password"/>
        <ButtonSubmit onPress={() => handleSubmit()} text={"Login"}/>
        <Text style={styles.text}>You don't have an account yet ?</Text>
        <Text style={styles.redirect} onPress={() => navigation.navigate(ROUTES.REGISTER,{screen:ROUTES.REGISTER})} >Sign up now !</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    padding:10,
    margin:10,
    borderColor:'black',
    borderWidth:2,
    textAlign: 'center',
    borderRadius: 1,
  },
  text: {
    marginTop:20,
    textAlign: 'center',
  },
  redirect: {
    textAlign: 'center',
    fontWeight:"800",
    color:"purple"
  }
})

export default Login;

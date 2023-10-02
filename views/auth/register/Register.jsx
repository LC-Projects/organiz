import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ROUTES } from "../../../constants";
import ButtonSubmit from "../../../components/ButtonSubmit";
import Input from "../../../components/Input";
import { userContext } from "../../../context/userContext";

const Register = ({navigation}) => {
  const {user, setUser} = useContext(userContext)
  
  return (
    <SafeAreaView>
      <View>
        <Image/>
        <Input text="Email"/>
        <Input text="Password"/>
        <Input text="Confim Password"/>
        <ButtonSubmit redirect={() => setUser(true)} text={"Sign Up"}/>
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
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { COLORS, IMGS, THEME } from '../../../constants'
import LottieView from "lottie-react-native";
import Input from '../../../components/Input';
import { userContext } from '../../../context/userContext';
import { appContext } from '../../../context/appContext';
import Logout from './Logout';
import ProfilePicture from './profilePicture';


const Profile = () => {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { backgroundColor, setBackgroundColor } = useContext(appContext)


  return (
    <View style={[styles.container, backgroundColor ? {backgroundColor:COLORS.dark} : {backgroundColor:COLORS.light}]}>
      <ProfilePicture />

      <Text style={[styles.title, backgroundColor ? {color:COLORS.light} : {color:COLORS.dark}]}>Personnal modification</Text>

      <View>
        <Text style={[styles.subtitle, backgroundColor ? {color:COLORS.light} : {color:COLORS.dark}]}>Your Email</Text>

        <Input text="New Email" value={newEmail} onChangeText={(e) => setNewEmail(e)} ></Input>

        <Text style={[styles.subtitle, backgroundColor ? {color:COLORS.light} : {color:COLORS.dark}]}>Your Password</Text>

        <Input text="New Password"
          value={newPassword}
          secureTextEntry={true}
          onChangeText={(e) => setNewPassword(e)}></Input>

        <Text style={[styles.subtitle, backgroundColor ? {color:COLORS.light} : {color:COLORS.dark}]}>Background color</Text>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={() => setBackgroundColor(true)} >
            <Text style={[styles.textButton, styles.dark]}>Dark</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setBackgroundColor(false)} >
            <Text style={[styles.textButton, styles.light]}>Light</Text>
          </TouchableOpacity>
        </View>

        <Logout />

      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    height:'100%'
  },
  profileImg: {
    height: '40%',
  },
  title: {
    fontSize:THEME.font.size.l,
    textAlign:"center",
    fontWeight:"600",
  },
  subtitle: {
    marginTop:20,
    fontSize:THEME.font.size.m,
    marginLeft:20,
    fontWeight:"600",
  },
  buttons: {
    marginTop:10,
    marginBottom:10,
    marginLeft:30,
    marginRight:30,
    flexDirection:"row",
    gap:80,
  },
  button: {
    flex:1,
    backgroundColor:COLORS.dark_purple,
    alignItems:"center",
    padding:10,
    borderRadius:5,
  },
  textButton: {
    fontSize:THEME.font.size.l,
    fontWeight:'800',
  },

  dark: {
    color:COLORS.dark
  },
  light: {
    color:COLORS.light
  }
})

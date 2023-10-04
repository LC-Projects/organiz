import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { COLORS, IMGS, THEME } from '../../../constants'
import LottieView from "lottie-react-native";
import Input from '../../../components/Input';
import { userContext } from '../../../context/userContext';
import { appContext } from '../../../context/appContext';
import ProfilePicture from './profilePicture';
import Title from './Title';
import Form from './form/Form';


const Profile = () => {
  const { backgroundColor, setBackgroundColor } = useContext(appContext)


  return (
    <View style={[styles.container, backgroundColor ? {backgroundColor:COLORS.dark} : {backgroundColor:COLORS.light}]}>
        <ProfilePicture />
        <Title />
        <Form />
      
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    height:'100%'
  },
})

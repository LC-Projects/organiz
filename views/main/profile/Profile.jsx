import { View, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { COLORS, THEME } from '../../../constants'
import { appContext } from '../../../context/appContext';
import Logout from './Logout';
import ProfilePicture from './ProfilePicture';
import Title from './Title';
import Form from './form/Form';


const Profile = () => {
  // Context
  const { backgroundColor, setBackgroundColor } = useContext(appContext)

  // Render
  return (
    <View style={[styles.container, backgroundColor ? { backgroundColor: COLORS.dark } : { backgroundColor: COLORS.light }]}>
      <ProfilePicture />
      <Title />
      <Form />
      <Logout />
    </View>
  )
}

export default Profile

// Style
const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  profileImg: {
    height: '40%',
  },
  title: {
    fontSize: THEME.font.size.l,
    textAlign: "center",
    fontWeight: "600",
  },
  subtitle: {
    marginTop: 20,
    fontSize: THEME.font.size.m,
    marginLeft: 20,
    fontWeight: "600",
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: "row",
    gap: 80,
  },
  button: {
    flex: 1,
    backgroundColor: COLORS.dark_purple,
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    fontSize: THEME.font.size.l,
    fontWeight: '800',
  },

  dark: {
    color: COLORS.dark
  },
  light: {
    color: COLORS.light
  }
})

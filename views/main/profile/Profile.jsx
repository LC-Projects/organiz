import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { COLORS, THEME } from '../../../constants'
import { appContext } from '../../../context/appContext';
import Logout from './Logout';
import ProfilePicture from './ProfilePicture';
import Title from './Title';
import Form from './form/Form';


const Profile = ({ navigation}) => {
  // Context
  const { backgroundColor } = useContext(appContext)

  // Render
  return (
      <View style={[styles.container, backgroundColor ? { backgroundColor: COLORS.dark } : { backgroundColor: COLORS.light }]}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ProfilePicture />
          <Title />
          <Form navigation={navigation}/>
          <Logout />
        </ScrollView>
      </View>
  )
}

export default Profile

// Style
const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
})

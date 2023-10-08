import { View, StyleSheet, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { appContext } from '../../../context/appContext';
import Logout from './form/_partials/Logout';
import ProfilePicture from './ProfilePicture';
import Title from './Title';
import Form from './form/Form';


const Profile = ({ navigation}) => {
  // Context
  const { mode } = useContext(appContext)

  // Render
  return (
      <View style={[styles.container, { backgroundColor: mode.background }]}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ProfilePicture />
          <Title />
          <Form />
          <Logout navigation={navigation}/>
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

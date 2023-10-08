import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet, View, Alert } from "react-native";
import { COLORS, ROUTES, THEME } from "../../../../../constants";
import { userContext } from "../../../../../context/userContext";
import { appContext } from "../../../../../context/appContext";
import { remove } from "../../../../../api/firebase/authUtils";

const Logout = ({navigation}) => {
  // Context
  const { setUser } = useContext(userContext);
  const { mode } = useContext(appContext);

  //Handler
  function deleteAccount() {
    Alert.alert(
      'Delete Account',
      'Do you want to delete your account an lost all the data save on it ?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete', 
          onPress: () => [remove(), navigation.navigate(ROUTES.REGISTER)]
        },
      ],
      {cancelable: false},
    );
  }

  function disconnectAccount() {
    Alert.alert(
      'Disconnect',
      'Do you want to disconnect your account an lost the connection to the application ?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Disconnect', 
          onPress: () => [setUser(false), navigation.navigate(ROUTES.LOGIN)]
        },
      ],
      {cancelable: false},
    );
  }
  // Render
  return (
    <>
      <Text
          style={[ styles.subtitle, { color: mode.contrastBackground } ]}
        >
          Left the application
        </Text>
      <View style={styles.button}>
        <TouchableOpacity style={[styles.buttonDisconnect, {backgroundColor: mode.button.delete}]} onPress={() => disconnectAccount()}>
          <Text style={[styles.textButton]}>Disconnect</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonDisconnect, {backgroundColor: mode.button.delete}]} onPress={() => deleteAccount()}>
          <Text style={[styles.textButton]}>Delete</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Logout;

// Style
const styles = StyleSheet.create({
  subtitle: {
    marginTop: 20,
    fontSize: THEME.font.size.m,
    marginLeft: 20,
    fontWeight: "600",
  },
  button: {
    flexDirection:'row',
    gap: 40,
    justifyContent:'center'
  },
  buttonDisconnect: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    fontSize: THEME.font.size.l,
    fontWeight: '800',  
    color: COLORS.white
  },
});

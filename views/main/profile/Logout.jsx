import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet, View, Alert } from "react-native";
import { COLORS, THEME } from "../../../constants";
import { userContext } from "../../../context/userContext";
import { appContext } from "../../../context/appContext";
import { remove } from "../../../api/firebase/authUtils";

const Logout = () => {
  // Context
  const { setUser } = useContext(userContext);
  const { backgroundColor } = useContext(appContext);

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
          onPress: () => remove
        },
      ],
      {cancelable: false},
    );
  }
  // Render
  return (
    <>
      <Text
          style={[
            styles.subtitle,
            backgroundColor ? { color: COLORS.light } : { color: COLORS.dark },
          ]}
        >
          Left the application
        </Text>
      <View style={styles.button}>
        <TouchableOpacity style={[styles.buttonDisconnect, {backgroundColor:COLORS.red}]} onPress={() => setUser(false)}>
          <Text style={[styles.textButton]}>Disconnect</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonDisconnect, {backgroundColor:COLORS.urgent_red}]} onPress={() => deleteAccount()}>
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
  },
});

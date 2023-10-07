import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet, View, Alert } from "react-native";
import { COLORS, ROUTES, THEME } from "../../../constants";
import { updateEmailUser, updatePasswordUser } from "../../../api/firebase/realTime/auth";
import { appContext } from "../../../context/appContext";


const Save = ({email, password}) => {
  function updateAuthentication(email, password)
  {
    try {
      updateEmailUser(email);
      updatePasswordUser(password);
      Alert.alert(
        'Data Save',
        'Your new email and password has been modified !',
      );
    }
    catch
    {
      Alert.alert(
        'An error was encountred, email and password weren\'t saved',
      );
    }
   
  }
  const { backgroundColor } = useContext(appContext);
  return (
    <View style={styles.button}>
      <TouchableOpacity style={[styles.buttonSave, backgroundColor ? {backgroundColor: COLORS.white} : {backgroundColor: COLORS.green}]} onPress={() => [updateAuthentication(email, password)]}>
        <Text style={[styles.textButton]}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Save;

// Style
const styles = StyleSheet.create({
  button: {
    flexDirection:'row',
    justifyContent:'center'
  },
  buttonSave: {
    alignItems: "center",
    marginTop: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
  },
  textButton: {
    fontSize: THEME.font.size.l,
    fontWeight: '800',  
  },
});

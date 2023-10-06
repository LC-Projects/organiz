import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { COLORS, THEME } from "../../../constants";
import { updateEmailUser, updatePasswordUser } from "../../../api/firebase/realTime/auth";
import { appContext } from "../../../context/appContext";


const Save = ({email, password}) => {
  const { backgroundColor } = useContext(appContext);
  return (
    <View style={styles.button}>
      <TouchableOpacity style={[styles.buttonSave, backgroundColor ? {backgroundColor: COLORS.green} : {backgroundColor: COLORS.white}]} onPress={() => [updateEmailUser(email), updatePasswordUser(password)]}>
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

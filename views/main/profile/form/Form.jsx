import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, THEME } from "../../../../constants";
import { userContext } from "../../../../context/userContext";
import { appContext } from "../../../../context/appContext";
import Input from "./Input";

const Form = () => {
  const { backgroundColor, setBackgroundColor } = useContext(appContext);
  const { user, setUser } = useContext(userContext);
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const inputs = [
    {label: "Your Email", placeholder: "New Email", value: newEmail, onChangeText: setNewEmail}
  ]

  return (
    <View>
        {inputs?.map((input, key) => <Input label={input.label} placeholder={input.placeholder} value={input.value} />)}
      {/* <Text
        style={[
          styles.subtitle,
          backgroundColor ? { color: COLORS.light } : { color: COLORS.dark },
        ]}
      >
        Your Password
      </Text>
      <Input
        text="New Password"
        value={newPassword}
        secureTextEntry={true}
        onChangeText={(e) => setNewPassword(e)}
      ></Input>
      <Text
        style={[
          styles.subtitle,
          backgroundColor ? { color: COLORS.light } : { color: COLORS.dark },
        ]}
      >
        Background color
      </Text> */}
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setBackgroundColor(true)}
        >
          <Text style={[styles.textButton, styles.dark]}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setBackgroundColor(false)}
        >
          <Text style={[styles.textButton, styles.light]}>Light</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.exitButton}
        onPress={() => setUser(false)}
      >
        <Text style={[styles.textButton]}>Disconnect</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
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
    fontWeight: "800",
  },
  exitButton: {
    backgroundColor: COLORS.urgent_red,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 80,
    marginRight: 80,
    padding: 10,
    borderRadius: 5,
  },
  dark: {
    color: COLORS.dark,
  },
  light: {
    color: COLORS.light,
  },
});

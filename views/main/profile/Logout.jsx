import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";
import { userContext } from "../../../context/userContext";

const Logout = () => {
  const { setUser } = useContext(userContext);

  return (
    <TouchableOpacity style={styles.button} onPress={() => setUser(false)}>
      <Text style={[styles.textButton]}>Disconnect</Text>
    </TouchableOpacity>
  );
};

export default Logout;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.urgent_red,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 80,
    marginRight: 80,
    padding: 10,
    borderRadius: 5,
  },
});

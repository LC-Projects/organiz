import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";
import { userContext } from "../../../context/userContext";

const Logout = () => {
  // Context
  const { setUser } = useContext(userContext);

  // Render
  return (
    <TouchableOpacity style={styles.button} onPress={() => setUser(false)}>
      <Text style={[styles.textButton]}>Disconnect</Text>
    </TouchableOpacity>
  );
};

export default Logout;

// Style
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

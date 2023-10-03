import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, THEME } from "../../constants";

const ButtonsActions = ({ cancel, add }) => {
  return (
    <View style={styles.actions}>
      <TouchableOpacity onPress={cancel}>
        <Text style={styles.cancel}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={add}>
        <Text style={styles.add}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonsActions;


const styles = StyleSheet.create({ 
    actions: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: THEME.spacing.xs,
      color: COLORS.white,
    },
  
    cancel: {
      color: COLORS.black,
      fontSize: THEME.font.size.m,
    },
    add: {
      color: COLORS.black,
      fontWeight: THEME.font.weight.bold,
      fontSize: THEME.font.size.m,
    },
  });
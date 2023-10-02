import React from "react";
import { View, Text, KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, THEME } from "../../../constants";

const Input = ({ cancel, add, value, onChange }) => {
  return (
    <KeyboardAvoidingView>
      <View style={styles.addTask}>
        <TextInput 
            placeholder="Task Title" 
            style={styles.input}
            value={value}
            onChange={onChange}
        />
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={cancel}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={add}>
          <Text style={styles.add}>Add</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Input;


const styles = StyleSheet.create({ 
    addTask: {
      backgroundColor: COLORS.light_gray,
      borderRadius: THEME.border.s,
      marginTop: THEME.spacing.xs,
      padding: THEME.spacing.xs,
    },
  
    input: {
      color: COLORS.black,
      fontWeight: THEME.font.weight.bold,
      fontSize: THEME.font.size.m,
      backgroundColor: COLORS.white,
      paddingLeft: THEME.spacing.xs,
      paddingRight: THEME.spacing.xs,
      borderRadius: THEME.border.xs,
    },
  
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
import React from "react";
import { View, Text, KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, THEME } from "../../../../constants";
import ButtonsActions from "../../../../components/button/ButtonsActions";

const Input = ({ cancel, add, value, onChangeText }) => {
  return (
    <KeyboardAvoidingView>
      <View style={styles.addTask}>
        <TextInput 
            placeholder="Task Title" 
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
        />
      </View>

      <ButtonsActions cancel={cancel} add={add} />

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
  });
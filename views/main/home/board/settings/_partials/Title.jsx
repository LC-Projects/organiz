import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { THEME } from "../../../../../../constants";
import InputWrapper from "../../../../../../components/wrapper/InputWrapper";

const Title = ({ value, onChangeText }) => {
  return (
    <InputWrapper>
      <TextInput style={styles.name} value={value} onChangeText={onChangeText} />
    </InputWrapper>
  );
};

export default Title;

const styles = StyleSheet.create({
    name: {
        textAlign: "center",
        borderBottomWidth: 2,
        fontSize: THEME.font.size.l,
        flex: 1,
      },
})
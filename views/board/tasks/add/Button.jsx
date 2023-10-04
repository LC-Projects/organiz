import React from "react";
import { Text, TouchableOpacity, Image, View, StyleSheet } from "react-native";
import { IMGS, THEME } from "../../../../constants";

const Button = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.icon} source={IMGS.icon.plus} />
      <Text>Add a card</Text>
      <View style={styles.icon} />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: THEME.spacing.s,
        marginTop: THEME.spacing.s,
    },

    icon: {
        width: 25,
        height: 25,
    }
});

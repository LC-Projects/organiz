import React, { useState } from "react";
import { View } from "react-native";
import InputWithLabel from "./InputWithLabel";
import ThemeMode from "./ThemeMode";

const Form = () => {
  // Initialization
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const inputs = [
    {label: "Your Email", placeholder: "New Email", value: newEmail, onChangeText: setNewEmail},
    {label: "Your Password", placeholder: "New Password", value: newPassword, onChangeText: setNewPassword},
  ]

  // Render
  return (
    <View>
        {inputs.map((input, key) => <InputWithLabel key={key} label={input.label} placeholder={input.placeholder} value={input.value} onChangeText={input.onChangeText} />)}
        <ThemeMode />
    </View>
  );
};

export default Form;

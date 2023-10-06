import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import InputWithLabel from "./InputWithLabel";
import ThemeMode from "./ThemeMode";
import { userContext } from "../../../../context/userContext";
import { updateEmailUser, updatePasswordUser } from "../../../../api/firebase/realTime/auth";
import ButtonsActions from "../../../../components/button/ButtonsActions";



const Form = ({ navigation }) => {
  // Context
  const { user, setUser } = useContext(userContext);

  // Initialization
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const inputs = [
    {label: "Your Email", placeholder: "New Email", value: user.email, secure:false},
    {label: "Your Password", placeholder: "New Password", secure:true},
  ]

  // Handler
  function updateEmail() {
    (newEmail ? updateEmailUser(newEmail) : null);
  }

  function updatePassword() {
    (newPassword ? updatePasswordUser(newPassword) : null);
  }

  // Render
  return (
    <View>
        {inputs.map((input, key) => <InputWithLabel key={key} label={input.label} placeholder={input.placeholder} value={input.value} />)}
        {/* <ButtonsActions cancel={navigation.goBack()} add={[updateEmail(), updatePassword()]}/> */}
        <ThemeMode />
    </View>
  );
};

export default Form;

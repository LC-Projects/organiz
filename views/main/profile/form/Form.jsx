import React, { useContext, useState } from "react";
import { View } from "react-native";
import InputWithLabel from "./InputWithLabel";
import ThemeMode from "./ThemeMode";
import { userContext } from "../../../../context/userContext";
import Save from "../Save";



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

  // Render
  return (
    <View>
        {inputs.map((input, key) => <InputWithLabel key={key} label={input.label} placeholder={input.placeholder} value={input.value} />)}
        {/* <ButtonsActions cancel={navigation.goBack()} add={[updateEmail(), updatePassword()]}/> */}
        <Save email={newEmail} password={newPassword}/>
        <ThemeMode />
    </View>
  );
};

export default Form;

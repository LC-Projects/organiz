import React, { useContext, useEffect, useState } from "react";
import { Alert, View } from "react-native";
import InputWithLabel from "./InputWithLabel";
import ThemeMode from "./ThemeMode";
import { userContext } from "../../../../context/userContext";
import Save from "../Save";

const Form = () => {
  // Context
  const { user, setUser } = useContext(userContext);

  // Initialization
  const [newEmail, setNewEmail] = useState(user.email);
  const [newPassword, setNewPassword] = useState(12345);
  const [save, setSave] = useState(false)
  const inputs = [
    {label: "Change Email", placeholder: "New Email", value: user.email, secure:false, setNewInput: setNewEmail},
    {label: "Change Password", placeholder: "New Password", secure:true, setNewInput: setNewPassword}, 
  ]
  useEffect(() => {
    if (newEmail?.length >= 10) {
      setNewEmail(newEmail);
    }
    else if(newEmail?.length > 1 ) {
      Alert.alert('Your email should be validated')
    }
    if (newPassword?.length >= 6) 
    {
      setNewPassword(newPassword);
    }
    else if(newPassword?.length > 1 ) {
      Alert.alert('Your password must contained more than 5 words !')
    }

  }, [save])
  // Render
  return (
    <View>
        {inputs.map((input, key) => <InputWithLabel key={key} setNewInput={input.setNewInput} label={input.label} placeholder={input.placeholder} value={input.value} secure={input.secure} />)}
        {/* <ButtonsActions cancel={navigation.goBack()} add={[updateEmail(), updatePassword()]}/> */}
        <Save setSave={setSave} email={newEmail} password={newPassword}/>
        <ThemeMode />
    </View>
  );
};

export default Form;
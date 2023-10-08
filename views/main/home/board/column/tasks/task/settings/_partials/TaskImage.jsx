import React, { useContext, useEffect } from "react";
import InputWrapper from "../../../../../../../../../components/wrapper/InputWrapper";
import Button1 from "../../../../../../../../../components/button/Button1";
import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, THEME } from "../../../../../../../../../constants";
import * as ImagePicker from "expo-image-picker";
import { userContext } from "../../../../../../../../../context/userContext";
import { TextInput } from "react-native-gesture-handler";

const TaskImage = ({ setImage, imgURI, setImgURI, data, value, onPress }) => {
  async function handleUpload() {
    try {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      let imgURI = result.assets[0].uri.split("/");
      let getImgName = imgURI[+imgURI.length - 1];

      if (!result.canceled) {
        setImage(getImgName);
        setImgURI(result.assets[0].uri);
      }
    } catch (e) {
      // throw e;
      console.log("Upload has been canceled")
    }
  }

  return (
    <InputWrapper column>
      <View style={styles.fileContainer}>
        <Text style={styles.label}>Image:</Text>
        <TextInput editable={false} style={styles.text}>{data?.image}</TextInput>
        <Button1 label="Upload" onPress={() => handleUpload()} />
      </View>
      {imgURI && <Image source={{ uri: imgURI }} style={styles.img} />}
    </InputWrapper>
  );
};

export default TaskImage;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    borderBottomWidth: 2,
    fontSize: THEME.font.size.l,
    flex: 1,
    overflow: "hidden",
    flexWrap: "nowrap"
    
  },
  fileContainer: {
    flexDirection: "row",
    gap: THEME.spacing.m,
    alignItems: "center"
  },
  img: {
    height: 200,
    width: "100%",
    borderWidth: 1,
    borderColor: COLORS.ultralight_gray,
    borderRadius: THEME.border.s
  },
  label: {
    fontSize: THEME.font.size.m,
    fontWeight: THEME.font.weight.bold,
  },
});

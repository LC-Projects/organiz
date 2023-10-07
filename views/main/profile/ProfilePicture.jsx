import AnimatedLottieView from "lottie-react-native";
import React from "react";
import { View, StyleSheet } from "react-native";
import { IMGS } from "../../../constants";

const ProfilePicture = () => {
  // Render
  return (
    <View style={styles.profileImg}>
      <AnimatedLottieView
        source={IMGS.json.profile}
        autoPlay
        loop
        style={{ transform: [{ scale: 1 }] }}
      />
    </View>
  );
};

export default ProfilePicture;

// Style
const styles = StyleSheet.create({
  profileImg: {
    height: 250,
  },
});

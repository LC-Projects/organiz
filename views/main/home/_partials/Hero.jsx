import AnimatedLottieView from "lottie-react-native";
import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { COLORS, IMGS } from "../../../../constants";
import { appContext } from "../../../../context/appContext";

const Hero = () => {
  // Initialization
  const { backgroundColor } = useContext(appContext);

  //   Render
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: backgroundColor ? COLORS.dark : COLORS.light },
      ]}
    >
      <AnimatedLottieView
        source={IMGS.json.homepage}
        autoPlay
        loop
        style={{ resizeMode: "cover" }}
      />
    </View>
  );
};

export default Hero;

// Style
const styles = StyleSheet.create({
  container: {
    height: 250,
    width: "100%",
    textAlign: "center",
  },
});

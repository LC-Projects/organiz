import { StyleSheet, View } from 'react-native'
import LottieView from "lottie-react-native";
import React from 'react'
import { IMGS } from '../../../../constants'

const Hero = () => {
  return (
    <View style={styles.registerImg}>
        <LottieView source={IMGS.json.register} autoPlay loop style={{ transform: [{ scale: 0.9 }] }} />
    </View>
    )
}

export default Hero

const styles = StyleSheet.create({
    registerImg: {
        height: '40%',
    }
})
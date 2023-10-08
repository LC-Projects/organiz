import { StyleSheet, View } from 'react-native'
import LottieView from "lottie-react-native";
import { IMGS } from '../../../../constants'

const Hero = () => {
  return (
    <View style={styles.registerImg}>
        <LottieView source={IMGS.json.register} autoPlay loop style={{ transform: [{ scale: 1 }] }} />
    </View>
    )
}

export default Hero

const styles = StyleSheet.create({
    registerImg: {
        height: 250,
    }
})
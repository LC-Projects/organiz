import { StyleSheet, View } from 'react-native'
import LottieView from "lottie-react-native";
import { IMGS } from '../../../../constants'

const Hero = () => {
  return (
    <View style={styles.loginImg}>
      <LottieView source={IMGS.json.login} autoPlay loop style={{ transform: [{ scale: 1.4 }] }} />
    </View>
  )
}

export default Hero

const styles = StyleSheet.create({
  loginImg: {
    height: 150,
    marginBottom: 50
  }
})
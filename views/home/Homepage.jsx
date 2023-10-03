import React, { useContext } from "react";
import { View, Text, Button, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, IMGS, ROUTES, THEME } from "../../constants";
import { userContext } from "../../context/userContext";
import DataBoard from "../../components/DataBoard";
import Board from "../../components/Board";
import LottieView from "lottie-react-native";

const Homepage = ({navigation}) => {
  const {user, setUser} = useContext(userContext)
  
  return (
    <SafeAreaView>
      <ScrollView style={styles.background}>
        <View style={{height: 250, width: "100%", textAlign: 'center', backgroundColor: COLORS.dark_purple}}>
          <LottieView source={IMGS.json.homepage} autoPlay loop style={{resizeMode: 'cover'}} />
        </View>
        {/* <Image src="../../assets/json/homepage-welcome-animation.json"/> */}
        <ScrollView horizontal={true} style={styles.array}>
          <DataBoard value={4} text="Boards" valueColor={COLORS.dark_purple} separator={true} />
          <DataBoard value={10} text="TO DO" valueColor={COLORS.green} />
          <DataBoard value={4} text="DOING" valueColor={COLORS.blue} />
          <DataBoard value={6} text="DONE" valueColor={COLORS.orange} />
        </ScrollView>
        <Text style={styles.text}>Boards</Text>
        <Board importance="High" importanceColor={COLORS.urgent_red} text="Organiz Mobile App" percentage={68}/>
        <Button title="Board" onPress={() => navigation.navigate(ROUTES.PROJECTBOARD)} />
        <Button title="Disconnect" onPress={() => setUser(false)} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor:COLORS.dark_gray,
  },
  array: {
    flexDirection:"row",
    backgroundColor:COLORS.white,
    borderRadius:10,
    marginTop: '-10%',
    marginLeft: THEME.spacing.m,
    marginRight: THEME.spacing.m,
    marginBottom: THEME.spacing.m,
  },
  text: {
    textAlign:"center",
    fontSize: 30,
    fontWeight:"bold",
    color:COLORS.white
  }
})

export default Homepage

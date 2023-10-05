import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, IMGS, ROUTES, STRINGS, THEME } from "../../../constants";
import { userContext } from "../../../context/userContext";
import DataBoard from "../../../components/DataBoard";
import Board from "../../../components/Board";
import LottieView from "lottie-react-native";
import { getBoards } from "../../../api/firebase/realTime/boards";
import { appContext } from "../../../context/appContext";
import RatioBoard from "./RatioBoard";
import Hero from "./Hero";
import Title from "./Title";
import BoardContainer from "./BoardContainer";

const Homepage = ({ navigation }) => {
  const { user, setUser } = useContext(userContext);
  const { refresh, setRefresh } = useContext(appContext);
  const { backgroundColor } = useContext(appContext);

  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const a = await getBoards(user.uid);
        if (a) {
          setData(a);
        }
      } catch (err) {
        Alert.alert("err");
      }
    })();
  }, [refresh]);

  return (
    <View
      style={[
        styles.container,
        backgroundColor
          ? { backgroundColor: COLORS.dark }
          : { backgroundColor: COLORS.light },
      ]}
    >
      <SafeAreaView>
        <ScrollView>
          <Hero />
          <RatioBoard DataBoard={data} />
          <Title />
          <BoardContainer data={data} navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Homepage;

// Style
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});

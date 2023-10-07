import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../../constants";
import { getBoards } from "../../../api/firebase/realTime/boards";
// Context
import { appContext } from "../../../context/appContext";
import { userContext } from "../../../context/userContext";
// Component
import Title from "./_partials/Title";
import Hero from "./_partials/Hero";
import RatioBoard from "./_partials/RatioBoard";
import BoardContainer from "./_partials/BoardContainer";

const Homepage = ({ navigation }) => {
  // Context
  const { user } = useContext(userContext);
  const { refresh, backgroundColor } = useContext(appContext);

  // Initalization
  const [data, setData] = useState(null);

  // Hook
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

  // Render
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
          <RatioBoard data={data} />
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

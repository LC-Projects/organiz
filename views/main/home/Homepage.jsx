import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, IMGS, THEME } from "../../../constants";
import { userContext } from "../../../context/userContext";
import DataBoard from "../../../components/DataBoard";
import Board from "../../../components/Board";
import LottieView from "lottie-react-native";
import { getBoards } from "../../../api/firebase/realTime/boards";
import { appContext } from "../../../context/appContext";

const Homepage = ({ navigation }) => {
  const { user, setUser } = useContext(userContext);
  const { resfresh, setRefresh } = useContext(appContext);
  const { backgroundColor } = useContext(appContext)

  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getBoards(user.uid);
        if (res) {
          setData(res);
        }
      } catch (err) {
        Alert.alert("err");
      }
    })();
  }, []);

  return (
    <View style={[styles.container, backgroundColor ? {backgroundColor: COLORS.dark} : {backgroundColor: COLORS.light}]}>
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              height: 250,
              width: "100%",
              textAlign: "center",
              backgroundColor: backgroundColor ? COLORS.dark : COLORS.light,
            }}
          >
            <LottieView
              source={IMGS.json.homepage}
              autoPlay
              loop
              style={{ resizeMode: "cover" }}
            />
          </View>
          <ScrollView horizontal={true} style={styles.array}>
            <DataBoard
              value={4}
              text="Boards"
              valueColor={COLORS.dark_purple}
              separator={true}
            />
            <DataBoard value={10} text="TO DO" valueColor={COLORS.green} />
            <DataBoard value={4} text="DOING" valueColor={COLORS.blue} />
            <DataBoard value={6} text="DONE" valueColor={COLORS.orange} />
          </ScrollView>
          <Text style={[styles.text, backgroundColor ? {color:COLORS.light} : {color:COLORS.dark}]}>Boards</Text>

          <View style={styles.boards}>
            {data &&
              data?.map((element, key) => (
                <Board
                  key={key}
                  importance="High"
                  importanceColor={element?.important}
                  title={element?.title}
                  percentage={68}
                />
              ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'100%'
  },
  array: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginTop: "-10%",
    marginLeft: THEME.spacing.m,
    marginRight: THEME.spacing.m,
    marginBottom: THEME.spacing.m,
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.white,
  },
  boards: {
    paddingLeft: THEME.spacing.m,
    paddingRight: THEME.spacing.m,
  }
});

export default Homepage;

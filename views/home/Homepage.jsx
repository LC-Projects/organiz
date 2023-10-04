import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, IMGS, ROUTES, THEME } from "../../constants";
import { userContext } from "../../context/userContext";
import DataBoard from "../../components/DataBoard";
import Board from "../../components/Board";
import LottieView from "lottie-react-native";
import { getBoards } from "../../api/firebase/realTime/boards";
import { appContext } from "../../context/appContext";

const Homepage = ({ navigation }) => {
  const { user, setUser } = useContext(userContext);
  const { resfresh, setRefresh } = useContext(appContext);

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
    <View>
      <SafeAreaView>
        <ScrollView style={styles.background}>
          <View
            style={{
              height: 250,
              width: "100%",
              textAlign: "center",
              backgroundColor: COLORS.dark_purple,
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
          <Text style={styles.text}>Boards</Text>

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

          <Button
            title="Board"
            onPress={() => navigation.navigate(ROUTES.PROJECTBOARD)}
          />
          <Button title="Disconnect" onPress={() => setUser(false)} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.dark_gray,
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

import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import {
  modifyBoard,
  deleteBoard,
} from "../../../../../api/firebase/realTime/boards";
import { userContext } from "../../../../../context/userContext";
import { appContext } from "../../../../../context/appContext";
import { COLORS, THEME } from "../../../../../constants";
import ProgressBar from "../../../../../components/ProgressBar";
import { getBoard } from "../../../../../api/firebase/realTime/boards";
import Title from "./_partials/Title";
import RadioButtons from "../../../../../components/button/RadioButtons";
import StatusButtons from "./_partials/StatusButtons";

const BoardSettings = ({ navigation, route }) => {
  const [boardId, setBoardId] = useState(route.params?.boardId);
  const [title, setTitle] = useState(route.params?.title);
  const [data, setData] = useState(null);
  const [percentage, setPercentage] = useState(0);
  const [status, setStatus] = useState(1);
  const { backgroundColor, refresh, setRefresh } = useContext(appContext);
  const { user, setUser } = useContext(userContext);

  const statusRadioBtn = [
    { name: "Low", value: 1, bg: status == 1 ? COLORS.blue : COLORS.urgent_blue },
    { name: "Medium", value: 2, bg: status == 2 ? COLORS.orange : COLORS.urgent_orange },
    { name: "High", value: 3, bg: status == 3 ? COLORS.red : COLORS.urgent_red },
  ];

  useEffect(() => {
    setPercentage(route.params?.percentage)
    setBoardId(route.params?.boardId);
    setTitle(route.params?.title);
    (async () => {
      try {
        const a = await getBoard(user.uid, boardId);
        if (a) {
          setData(a);
        }
      } catch (err) {
        Alert.alert("You have encountered an error !");
      }
    })();
  }, [route.params]);

  function save() {
    try {
      let board = {
        title: data?.title,
        status: status,
      };
      modifyBoard(user.uid, boardId, board);
      setRefresh(!refresh);
      navigation.goBack();
    } catch {
      Alert.alert("You have encountered an error !");
    }
  }

  function remove() {
    try {
      deleteBoard(user.uid, boardId);
      setRefresh(!refresh);
      navigation.pop(2);
    } catch {
      Alert.alert("You have encountered an error !");
    }
  }

  return (
    <ScrollView
      style={[
        styles.container,
        backgroundColor
          ? { backgroundColor: COLORS.dark }
          : { backgroundColor: COLORS.light },
      ]}
    >
      <View style={styles.containerProgressBar}>
        <ProgressBar percentage={percentage} />
      </View>

      <Title value={data?.title} onChangeText={setTitle} />

      <StatusButtons data={statusRadioBtn} active={status} onPress={setStatus} />

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.buttonAction} onPress={remove}>
          <Text style={styles.titleButton}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonAction}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.titleButton}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.buttonAction,
            backgroundColor
              ? { backgroundColor: COLORS.white }
              : { backgroundColor: COLORS.green },
          ]}
          onPress={save}
        >
          <Text
            style={[
              styles.titleButton,
              backgroundColor
                ? { color: COLORS.black }
                : { color: COLORS.white },
            ]}
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BoardSettings;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 10,
  },
  containerProgressBar: {
    alignItems: "center",
    flex: 2,
    flexDirection: "row",
    margin: 10,
    gap: 10,
    padding: 2,
    height: 22,
    backgroundColor: COLORS.white,
    borderRadius: 15,
  },
  percent: {
    marginRight: 10,
    fontSize: THEME.font.size.m,
    fontWeight: "bold",
  },
  containerTitle: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  title: {
    fontSize: THEME.font.size.m,
    fontWeight: "600",
  },
  containerStatus: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    gap: 20,
  },
  button: {
    backgroundColor: COLORS.dark_purple,
    borderRadius: 10,
    padding: 10,
  },
  titleButtonStatus: {
    fontSize: THEME.font.size.m,
    color: COLORS.white,
  },
  containerButton: {
    flexDirection: "row",
    flex: 1,
    gap: 20,
    padding: 10,
  },
  buttonAction: {
    backgroundColor: COLORS.dark_purple,
    borderRadius: 10,
    padding: 15,
    flex: 1,
  },
  titleButton: {
    fontSize: THEME.font.size.l,
    fontWeight: "600",
    color: COLORS.white,
    textAlign: "center",
  },
});

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
import StatusButtons from "./_partials/StatusButtons";

const BoardSettings = ({ navigation, route }) => {
  // Context
  const { backgroundColor, refresh, setRefresh } = useContext(appContext);
  const { user } = useContext(userContext);

  // Initialization
  const [percentage, setPercentage] = useState(0);
  const [boardId, setBoardId] = useState(null);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(1);

  const statusRadioBtn = [
    { name: "Low", value: 1, bg: status == 1 ? COLORS.blue : COLORS.urgent_blue },
    { name: "Medium", value: 2, bg: status == 2 ? COLORS.orange : COLORS.urgent_orange },
    { name: "High", value: 3, bg: status == 3 ? COLORS.red : COLORS.urgent_red },
  ];

  function save() {
    try {
      let board = {
        title,
        status
      };
      modifyBoard(user.uid, boardId, board);
      setRefresh(!refresh)
      navigation.pop(2);
    } catch {
      Alert.alert("You have encountered an error!");
    }
  }

  function remove() {
    try {
      deleteBoard(user.uid, boardId);
      setRefresh(!refresh);
      navigation.pop(2);
    } catch {
      Alert.alert("You have encountered an error!");
    }
  }

  useEffect(() => {
    setPercentage(route.params?.percentage)
    setBoardId(route.params?.boardId);
    setTitle(route.params?.title);
    setStatus(route.params?.status);
  }, [route.params]);

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

      <Title value={title} onChangeText={setTitle} />

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

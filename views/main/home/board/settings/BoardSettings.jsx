import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, ScrollView, Alert, SafeAreaView } from "react-native";
import { modifyBoard, deleteBoard } from "../../../../../api/firebase/realTime/boards";
import { userContext } from "../../../../../context/userContext";
import { appContext } from "../../../../../context/appContext";
import { COLORS, THEME } from "../../../../../constants";
import ProgressBar from "../../../../../components/ProgressBar";
import Title from "./_partials/Title";
import StatusButtons from "./_partials/StatusButtons";
import DeleteCancelSaveButton from "../../../../../components/button/DeleteCancelSaveButton";

const BoardSettings = ({ navigation, route }) => {
  // Context
  const { mode, refresh, setRefresh } = useContext(appContext);
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
    <SafeAreaView>
      <ScrollView style={[styles.container, { backgroundColor: mode.background }]} >

        <ProgressBar percentage={percentage} displayAsInput />

        <Title value={title} onChangeText={setTitle} />

        <StatusButtons data={statusRadioBtn} active={status} onPress={setStatus} />

        <DeleteCancelSaveButton
          onPressDelete={() => remove()}
          onPressCancel={() => navigation.goBack()}
          onPressSave={() => save()}
        />

      </ScrollView>
    </SafeAreaView>
  );
};

export default BoardSettings;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: THEME.spacing.m,
  },
});

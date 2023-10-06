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
} from "../../../../../../api/firebase/realTime/boards";
import { userContext } from "../../../../../../context/userContext";
import { appContext } from "../../../../../../context/appContext";
import { COLORS, THEME } from "../../../../../../constants";
import ProgressBar from "../../../../../../components/ProgressBar";
import { getBoard } from "../../../../../../api/firebase/realTime/boards";

const BoardSettings = ({ navigation, route }) => {
  const [boardId, setBoardId] = useState(route.params?.boardId);
  const [title, setTitle] = useState(route.params?.title);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(1);
  const { backgroundColor, refresh, setRefresh } = useContext(appContext);
  const { user, setUser } = useContext(userContext);

  useEffect(() => {
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
        <ProgressBar percentage={68} />
        <Text style={styles.percent}>68 %</Text>
      </View>

      <View style={styles.containerTitle}>
        <TextInput style={styles.name} onChangeText={setTitle}>
          {data?.title}
        </TextInput>
      </View>

      <View style={styles.containerStatus}>
        <Text style={styles.title}>Move :</Text>
        <TouchableOpacity
          style={[
            styles.button,
            status == 1
              ? { backgroundColor: COLORS.blue }
              : { backgroundColor: COLORS.urgent_blue },
          ]}
          onPress={() => setStatus(1)}
        >
          <Text style={styles.titleButtonStatus}>Low</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            status == 2
              ? { backgroundColor: COLORS.orange }
              : { backgroundColor: COLORS.urgent_orange },
          ]}
          onPress={() => setStatus(2)}
        >
          <Text style={styles.titleButtonStatus}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            status == 3
              ? { backgroundColor: COLORS.red }
              : { backgroundColor: COLORS.urgent_red },
          ]}
          onPress={() => setStatus(3)}
        >
          <Text style={styles.titleButtonStatus}>High</Text>
        </TouchableOpacity>
      </View>
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
  name: {
    textAlign: "center",
    borderBottomWidth: 2,
    fontSize: THEME.font.size.l,
    flex: 1,
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

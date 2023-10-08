import React, { useContext, useEffect, useState } from "react";
import { deleteTask, getTask, modifyTask } from "../../../../../../../../api/firebase/realTime/tasks";
import { StyleSheet, ScrollView, Alert, SafeAreaView, View, Text } from "react-native";
import { COLORS, STRINGS, THEME } from "../../../../../../../../constants";
// Context
import { appContext } from "../../../../../../../../context/appContext";
import { userContext } from "../../../../../../../../context/userContext";
// Component
import ProgressBar from "../../../../../../../../components/ProgressBar";
import Title from "./_partials/Title";
import Move from "./_partials/Move";
import Color from "./_partials/Color";
import Image from "./_partials/TaskImage";
import Description from "./_partials/Description";
import { getImage, upload } from "../../../../../../../../api/firebase/storage/image";
import DeleteCancelSaveButton from "../../../../../../../../components/button/DeleteCancelSaveButton";

const TaskSettings = ({ navigation, route }) => {
  // context
  const { mode, refresh, setRefresh } = useContext(appContext);
  const { user } = useContext(userContext);

  // Initialization
  const move = [
    { name: STRINGS.TODO, value: 1, keyName: "todo" },
    { name: STRINGS.DOING, value: 2, keyName: "doing" },
    { name: STRINGS.DONE, value: 3, keyName: "done" },
  ];
  const [boardId, setBoardId] = useState(null);
  const [column, setColumn] = useState(null);
  const [taskId, setTaskId] = useState(null);
  const [percentage, setPercentage] = useState(0);
  const [updating, setUpdating] = useState(false)

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(1);
  const [tag, setTag] = useState("");
  const [image, setImage] = useState("");
  const [imgURI, setImgURI] = useState("")
  const [description, setDescription] = useState("");
  const data = {
    boardId,
    column,
    taskId,
    move,
    image
  };

  // Handler
  function remove() {
    try {
      deleteTask(user.uid, boardId, column, taskId);
      setRefresh(!refresh);
      navigation.goBack();
    } catch {
      Alert.alert("You have encountered an error!");
    }
  }

  async function save() {
    try {
      const task = {
        title,
        status,
        image,
        tag,
        description,
      };

      await modifyTask(user.uid, boardId, column, taskId, task, move);

      if (image) await upload(user.uid, boardId, taskId, image, imgURI);

      setUpdating(true)
      setTimeout(() => {
        setRefresh(!refresh);
        setUpdating(false)
        navigation.goBack();
      }, 2000);
    } catch {
      Alert.alert("You have encountered an error!");
    }
  }

  // Hook
  useEffect(() => {
    setBoardId(route.params?.boardId);
    setColumn(route.params?.column);
    setTaskId(route.params?.taskId);
    setPercentage(route.params?.percentage);

    (async () => {
      try {
        const gettingTask = await getTask(
          user.uid,
          route.params?.boardId,
          route.params?.column,
          route.params?.taskId
        );
        if (gettingTask) {
          setTitle(gettingTask.title);
          setTag(gettingTask.tag);
          setImage(gettingTask.image);
          setStatus(gettingTask.status);
          setDescription(gettingTask.description);

          (async () => {
            try {
              const gettingImg = await getImage(
                user.uid,
                route.params?.boardId,
                route.params?.taskId,
                gettingTask.image
              );
              if (gettingImg) {
                setImgURI(gettingImg);
              }
            } catch (err) {
              // Alert.alert("Can't get image");
              // console.log("Can't get image");
              return
            }
          })();
        }
      } catch (err) {
        Alert.alert("You have encountered an error!");
      }
    })();
  }, [route.params, refresh]);

  return (
    <SafeAreaView>
      <ScrollView style={[styles.container, { backgroundColor: mode.background }]} >

        <ProgressBar percentage={percentage} displayAsInput />

        <Title value={title} onChangeText={setTitle} />

        <Move data={move} active={status} onPress={setStatus} />

        <Color value={tag} onChangeText={setTag} />

        <Image setImage={setImage} imgURI={imgURI} setImgURI={setImgURI} data={data} onPress={() => uploadImage()} />

        <Description value={description} onChangeText={setDescription} />

        <DeleteCancelSaveButton
          onPressDelete={() => remove()}
          onPressCancel={() => navigation.goBack()}
          onPressSave={() => save()}
        />

        {updating && <Text style={styles.message}>Updating ...</Text>}

      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskSettings;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: THEME.spacing.m,
  },
  message: {
    position: "absolute",
    top: "30%",
    left: 0,
    right: 0,
    color: COLORS.black,
    backgroundColor: COLORS.ultralight_gray,
    padding: 25,
    margin: 25,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: THEME.border.m,
    overflow: "hidden"
  }
});

import React, { useContext, useEffect, useState } from "react";
import { deleteTask, getTask, modifyTask } from "../../../../../../../../api/firebase/realTime/tasks";
import { StyleSheet, ScrollView, Alert, SafeAreaView } from "react-native";
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
  const { backgroundColor, refresh, setRefresh } = useContext(appContext);
  const { user, setUser } = useContext(userContext);

  // Initialization
  const move = [
    { name: STRINGS.TODO, value: 1, keyName: "todo" },
    { name: STRINGS.DOING, value: 2, keyName: "doing" },
    { name: STRINGS.DONE, value: 3, keyName: "done" },
  ];
  const [boardId, setBoardId] = useState(null);
  const [column, setColumn] = useState(null);
  const [taskId, setTaskId] = useState(null);
  const [percentage, setPercentage] = useState(0)

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

      if (image) upload(user.uid, boardId, taskId, image, imgURI);

      setRefresh(!refresh);
      navigation.goBack();
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
  }, [route.params]);

  return (
    <SafeAreaView>
      <ScrollView style={[styles.container, backgroundColor ? { backgroundColor: COLORS.dark } : { backgroundColor: COLORS.light }]} >

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

      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskSettings;

const styles = StyleSheet.create({
  container: {
    padding: THEME.spacing.m,
  },
});

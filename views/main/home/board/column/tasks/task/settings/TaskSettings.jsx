import React, { useContext, useEffect, useState } from "react";
import {
  deleteTask,
  getTask,
  modifyTask,
} from "../../../../../../../../api/firebase/realTime/tasks";
import { View, StyleSheet, ScrollView, Alert, SafeAreaView } from "react-native";
import { COLORS, STRINGS, THEME } from "../../../../../../../../constants";
// Context
import { appContext } from "../../../../../../../../context/appContext";
import { userContext } from "../../../../../../../../context/userContext";
// Component
import ProgressBar from "../../../../../../../../components/ProgressBar";
import InputWrapper from "../../../../../../../../components/wrapper/InputWrapper";
import Button1 from "../../../../../../../../components/button/Button1";
import Title from "./_partials/Title";
import Move from "./_partials/Move";
import Color from "./_partials/Color";
import Image from "./_partials/TaskImage";
import Description from "./_partials/Description";
import { getImage, upload } from "../../../../../../../../api/firebase/storage/image";

const TaskSettings = ({ navigation, route }) => {
  // context
  const { backgroundColor, refresh, setRefresh } = useContext(appContext);
  const { user, setUser } = useContext(userContext);
  const [percentage, setPercentage] = useState(route.params?.percentage)

  // Initialization
  const move = [
    { name: STRINGS.TODO, value: 1, keyName: "todo" },
    { name: STRINGS.DOING, value: 2, keyName: "doing" },
    { name: STRINGS.DONE, value: 3, keyName: "done" },
  ];
  const [boardId, setBoardId] = useState(route.params?.boardId);
  const [column, setColumn] = useState(route.params?.column);
  const [taskId, setTaskId] = useState();

  const [title, setTitle] = useState(route.params?.title);
  const [status, setStatus] = useState(1);
  const [tag, setTag] = useState(route.params?.tag);
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

  function save() {
    try {
      const task = {
        title,
        status,
        image,
        tag,
        description,
      };
      modifyTask(user.uid, boardId, column, taskId, task, move);
      if (image) upload(user.uid, boardId, taskId, image , imgURI);
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
    (async () => {
      try {
        const gettingTask = await getTask(
          user.uid,
          route.params?.boardId,
          route.params?.column,
          route.params?.taskId
        );
        if (gettingTask) {
          // setData(a);
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
        Alert.alert("You have encountered an error !");
      }
    })();
  }, [route.params]);

  return (
    <SafeAreaView>
        <ScrollView
          style={[
            styles.container,
            backgroundColor
              ? { backgroundColor: COLORS.dark }
              : { backgroundColor: COLORS.light },
          ]}
        >
          <InputWrapper
            style={{
              paddingLeft: 4,
              paddingRight: 4,
              paddingTop: 0,
              paddingBottom: 0,
              borderRadius: 10,
            }}
          >
            <ProgressBar percentage={percentage} />
          </InputWrapper>
          <Title value={title} onChangeText={setTitle} />
          <Move data={move} active={status} onPress={setStatus} />
          <Color value={tag} onChangeText={setTag} />
          <Image setImage={setImage} imgURI={imgURI} setImgURI={setImgURI} data={data} onPress={() => uploadImage()} />
          <Description value={description} onChangeText={setDescription} />
          <View style={styles.actionsButton}>
            <Button1
              flex
              label="Delete"
              style={{ backgroundColor: COLORS.red }}
              onPress={() => remove()}
            />
            <Button1 flex label="Cancel" onPress={() => navigation.goBack()} />
            <Button1
              flex
              label="Save"
              style={[
                backgroundColor
                  ? { backgroundColor: COLORS.white }
                  : { backgroundColor: COLORS.green },
              ]}
              labelStyle={
                backgroundColor ? { color: COLORS.black } : { color: COLORS.white }
              }
              onPress={() => save()}
            />
          </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default TaskSettings;

const styles = StyleSheet.create({
  container: {
    padding: THEME.spacing.m,
  },
  actionsButton: {
    flexDirection: "row",
    flex: 1,
    gap: 20,
    paddingTop: THEME.spacing.s,
    paddingBottom: 80
  },
});

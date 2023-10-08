import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Button from "./task/add/Button";
import Task from "./task/Task";
import Input from "./task/add/Input";
import { addTask } from "../../../../../../api/firebase/realTime/tasks";
import { userContext } from "../../../../../../context/userContext";
import { appContext } from "../../../../../../context/appContext";

const Tasks = ({ percentage, navigation, boardId, data, keyName }) => {
  // Context
  const { user } = useContext(userContext);
  const { refresh, setRefresh } = useContext(appContext);

  // Initialization
  const [add, setAdd] = useState(false);
  const [title, setTitle] = useState("");

  // Handler
  function handleShowAddCard() {
    setAdd(true);
  }

  function handleHideAddCard() {
    setAdd(false);
  }

  async function handleAdd() {
    console.log(user.uid, boardId);
    await addTask(user.uid, boardId, keyName,
      {
        title,
        status: 1,
        tag: "#FF7081",
        image: "",
        description: ""
      },
    );

    setTitle("");
    setRefresh(!refresh);
    setAdd(false);
  }

  // Hook
  useEffect(() => { }, [refresh])

  // Hendler
  return (
    <View style={styles.tasks}>
      {data && data?.map((task, key) => (
        <Task percentage={percentage} navigation={navigation} boardId={boardId} column={keyName} taskId={key} key={key} title={task?.title} tag={task?.tag} />
      ))}

      {add ? (
        <Input
          value={title}
          onChangeText={(e) => setTitle(e)}
          cancel={() => handleHideAddCard()}
          add={() => handleAdd()}
        />
      ) : (
        <Button onPress={() => handleShowAddCard()} />
      )}
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  tasks: {},
});

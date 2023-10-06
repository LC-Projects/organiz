import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "./add/Button";
import Task from "./task/Task";
import Input from "./add/Input";
import { addTask } from "../../../../../../api/firebase/realTime/tasks";
import { userContext } from "../../../../../../context/userContext";
import { appContext } from "../../../../../../context/appContext";

const Tasks = ({ navigation, boardId, data, keyName }) => {
  const { user, setUser } = useContext(userContext);
  const { refresh, setRefresh } = useContext(appContext);

  const [add, setAdd] = useState(false);
  const [title, setTitle] = useState("");

  function handleAddCard() {
    setAdd(true);
  }

  function handleCancel() {
    setAdd(false);
  }

  function handleAdd() {
    addTask(user.uid, 0, keyName, 
        {
          title,
          status:1,
          tag: "#FF7081",
          image:"",
          description:""
        },
    );

    setAdd(false);
    setTitle("");
    setRefresh(!refresh)
  }

  return (
    <View style={styles.tasks}>
      {data?.map((task,key) => (
        <Task navigation={navigation} boardId={boardId} column={keyName} taskId={key} key={key} title={task?.title} tag={task?.tag} />
      ))}

      {add ? (
        <Input
          value={title}
          onChangeText={(e) => setTitle(e)}
          cancel={handleCancel}
          add={handleAdd}
        />
      ) : (
        <Button onPress={handleAddCard} />
      )}
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  tasks: {},
});

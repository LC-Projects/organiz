import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "./add/Button";
import Task from "./task/Task";
import Input from "./add/Input";
import { userContext } from "../../../context/userContext";
import { addTask } from "../../../api/firebase/realTime/tasks";
import { appContext } from "../../../context/appContext";

const Tasks = ({ data }) => {
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
    addTask(user.uid, 0, "todo", 
        {
          tag: "#FF7081",
          title,
        },
    );

    setAdd(false);
    setTitle("");
    setRefresh(!refresh)
  }

  return (
    <View style={styles.tasks}>
      {data?.map((task) => (
        <Task key={task?.id} title={task?.title} tag={task?.tag} />
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

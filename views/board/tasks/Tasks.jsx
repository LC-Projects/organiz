import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Task from "./Task";
import Input from "./Input";
import Button from "./Button";

const Tasks = ({ data }) => {
  const [add, setAdd] = useState(false)
  const [cardTitle, setCardTitle] = useState("")

  function handleAddCard() {
    setAdd(true)
  }

  function handleCancel() {
    setAdd(false)
  }

  function handleAdd() {
    // setAdd(false)
    // Todo: Add to Firebase
    // let newData =    {
    //   id: Math.random(),
    //   tag: "#FF7081",
    //   title: cardTitle,
    // }

    // setCardTitle([...data, newData]);

  }

  return (
    <View style={styles.tasks}>
      {data.map((task) => (
        <Task key={task.id} tag={task.tag} />
      ))}

      {add ? <Input value={cardTitle} onChangeText={(e) => setCardTitle(e)} cancel={handleCancel} add={handleAdd} /> : <Button onPress={handleAddCard} />}
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  tasks: {},
});

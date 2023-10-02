import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { COLORS, THEME } from "../../../constants";
import Task from "./Task";

const Tasks = ({ data }) => {
  return (
    <View style={styles.tasks}>
      {data.map((task) => (
        <Task key={task.id} tag={task.tag} />
      ))}


      <View>
        <TextInput></TextInput>
      </View>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  tasks: {},
});

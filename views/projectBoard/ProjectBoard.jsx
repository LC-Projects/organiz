import React, { useState } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Board from "../board/Board";
import { COLORS, THEME } from "../../constants";

const ProjectBoard = () => {
  const [data, setData] = useState({
    todo: [
      {
        id: 1,
        tag: "#AEE779",
        title: "Create Homepage",
      },
      {
        id: 2,
        tag: "#FF7081",
        title: "Create Homepage",
      },
      {
        id: 3,
        tag: "#F7F6B4",
        title: "Create Homepage",
      },
      {
        id: 4,
        tag: "#4EDCEB",
        title: "Create Homepage",
      },
    ],
    doing: [
      {
        id: 1,
        tag: "#AEE779",
        title: "Create Homepage",
      },
      {
        id: 2,
        tag: "#FF7081",
        title: "Create Homepage",
      },
    ],
    done: [
      {
        id: 1,
        tag: "#AEE779",
        title: "Create Homepage",
      },
      {
        id: 2,
        tag: "#FF7081",
        title: "Create Homepage",
      },
    ],
  });

  const titles = ["To Do", "Doing", "Done"];

  const renderScene = SceneMap({
    todo: () => <Board title={titles[0]} data={data.todo} />,
    doing: () => <Board title={titles[1]} data={data.doing} />,
    done: () => <Board title={titles[2]} data={data.done} />,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "todo", title: titles[0] },
    { key: "doing", title: titles[1] },
    { key: "done", title: titles[2] },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.tabBarIndicator}
      style={styles.tabBarContainer}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={styles.container}
    />
  );
};

export default ProjectBoard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark_gray,
  },
  tabBarIndicator: {
    backgroundColor: COLORS.white
  },
  tabBarContainer: {
    backgroundColor: COLORS.dark_purple
  },
});

import React, { useContext, useEffect, useState } from "react";
import { Alert, StyleSheet, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { appContext } from "../../../../context/appContext";
import { userContext } from "../../../../context/userContext";
import { COLORS } from "../../../../constants";
import { getTasks } from "../../../../api/firebase/realTime/tasks";
import Column from "./column/Column";
import { calculatePercentage } from "../../../../utils/maths";

const Board = ({ navigation, route }) => {
  // Context
  const { user } = useContext(userContext);
  const { refresh, mode } = useContext(appContext);

  // Inititalization
  const layout = useWindowDimensions();
  const titles = [
    { name: "To Do", value: 1, key: "todo" },
    { name: "Doing", value: 2, key: "doing" },
    { name: "Done", value: 3, key: "done" },
  ];
  const [boardId, setBoardId] = useState(route.params?.boardId);
  const [percentage, setPercentage] = useState(0);
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: titles[0].key, title: titles[0].name },
    { key: titles[1].key, title: titles[1].name },
    { key: titles[2].key, title: titles[2].name },
  ]);
  const renderScene = SceneMap({
    todo: () => (
      <Column
        percentage={percentage}
        navigation={navigation}
        boardId={boardId}
        title={titles[0].name}
        data={data?.todo?.filter(e => e !== undefined)}
        keyName={titles[0].key}
        status={titles[0].value}
      />
    ),
    doing: () => (
      <Column
        percentage={percentage}
        navigation={navigation}
        boardId={boardId}
        title={titles[1].name}
        data={data?.doing?.filter(e => e !== undefined)}
        keyName={titles[1].key}
        status={titles[1].value}
      />
    ),
    done: () => (
      <Column
        percentage={percentage}
        navigation={navigation}
        boardId={boardId}
        title={titles[2].name}
        data={data?.done?.filter(e => e !== undefined)}
        keyName={titles[2].key}
        status={titles[2].value}
      />
    ),
  });

  // Component
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={styles.tabBarIndicator}
      style={styles.tabBarContainer}
    />
  );

  // Hook
  useEffect(() => {
    setBoardId(route.params?.boardId);
    
    (async () => {
      try {
        const a = await getTasks(user.uid, boardId);
        if (a) {
          setPercentage(calculatePercentage(a));
          setData(a);
        }
      } catch (err) {
        Alert.alert("err");
      }
    })();
  }, [route.params, boardId, refresh]);

  // Render
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={[styles.container, { backgroundColor: mode.background }]}
    />
  );
};

export default Board;

// Style
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark_gray,
  },
  tabBarIndicator: {
    backgroundColor: COLORS.white,
  },
  tabBarContainer: {
    backgroundColor: COLORS.dark_purple,
  },
});

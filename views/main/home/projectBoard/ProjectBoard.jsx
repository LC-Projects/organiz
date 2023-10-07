import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { appContext } from "../../../../context/appContext";
import { userContext } from "../../../../context/userContext";
import { COLORS, ROUTES } from "../../../../constants";
import { getTasks } from "../../../../api/firebase/realTime/tasks";
import Board from "./board/Board";
import { calculatePercentage } from "../../../../utils/maths";

const ProjectBoard = ({ navigation, route }) => {
  // Context
  const { user, setUser } = useContext(userContext);
  const { refresh, setRefresh, backgroundColor } = useContext(appContext);

  // Inititalization
  const layout = useWindowDimensions();
  const titles = [
    { name: "To Do", key: "todo" },
    { name: "Doing", key: "doing" },
    { name: "Done", key: "done" },
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
      <Board
        percentage={percentage}
        navigation={navigation}
        boardId={boardId}
        title={titles[0].name}
        data={data?.todo}
        keyName={titles[0].key}
      />
    ),
    doing: () => (
      <Board
        percentage={percentage}
        navigation={navigation}
        boardId={boardId}
        title={titles[1].name}
        data={data?.doing}
        keyName={titles[1].key}
      />
    ),
    done: () => (
      <Board
        percentage={percentage}
        navigation={navigation}
        boardId={boardId}
        title={titles[2].name}
        data={data?.done}
        keyName={titles[2].key}
      />
    ),
  });

  // Function
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
          setData(a);
        }
      } catch (err) {
        Alert.alert("err");
      }
    })();
    setPercentage(calculatePercentage(data));
  }, [boardId, refresh]);

  // Render
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={[
        styles.container,
        backgroundColor
          ? { backgroundColor: COLORS.dark }
          : { backgroundColor: COLORS.light },
      ]}
    />
  );
};

export default ProjectBoard;

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

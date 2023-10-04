import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Board from "../board/Board";
import { COLORS, THEME } from "../../constants";
import { getTasks } from "../../api/firebase/realTime/tasks";
import { userContext } from "../../context/userContext";
import { appContext } from "../../context/appContext";

const ProjectBoard = ({ route, navigation }) => {
  const { user, setUser } = useContext(userContext);
  const { refresh, setRefresh } = useContext(appContext);
  const [boardId, setstate] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    setstate(route.params?.boardId);
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
  }, [boardId, refresh]);

  const titles = [
    { name: "To Do", key: "todo" },
    { name: "Doing", key: "doing" },
    { name: "Done", key: "done" },
  ];

  const renderScene = SceneMap({
    todo: () => <Board navigation={navigation} title={titles[0].name} data={data?.todo} keyName={titles[0].key} />,
    doing: () => <Board navigation={navigation} title={titles[1].name} data={data?.doing} keyName={titles[1].key} />,
    done: () => <Board navigation={navigation} title={titles[2].name} data={data?.done} keyName={titles[2].key} />,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: titles[0].key, title: titles[0].name },
    { key: titles[1].key, title: titles[1].name },
    { key: titles[2].key, title: titles[2].name },
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
    backgroundColor: COLORS.white,
  },
  tabBarContainer: {
    backgroundColor: COLORS.dark_purple,
  },
});

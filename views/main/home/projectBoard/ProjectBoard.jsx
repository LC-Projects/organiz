import React, { useContext, useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { appContext } from "../../../../context/appContext";
import { userContext } from "../../../../context/userContext";
import { COLORS, ROUTES } from "../../../../constants";
import { getTasks } from "../../../../api/firebase/realTime/tasks";
import Board from "./board/Board";
import Button from "./board/tasks/add/Button";

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
  const [boardId, setstate] = useState("");
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: titles[0].key, title: titles[0].name },
    { key: titles[1].key, title: titles[1].name },
    { key: titles[2].key, title: titles[2].name },
  ]);
  const renderScene = SceneMap({
    todo: () => (
      <View>
        <Board navigation={navigation} boardId={boardId} title={titles[0].name} data={data?.todo} keyName={titles[0].key} />
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.BOARDSETTINGS, { "boardId": boardId, "title": titles[0].name})} >
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
      
    ),
    doing: () => (
      <Board
        title={titles[1].name}
        data={data?.doing}
        keyName={titles[1].key}
      />
    ),
    done: () => (
      <Board title={titles[2].name} data={data?.done} keyName={titles[2].key} />
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


  // Render
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={[styles.container, backgroundColor ? {backgroundColor:COLORS.dark} : {backgroundColor:COLORS.light}]}
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

import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import Homepage from "./home/Homepage";
import Profile from "./profile/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../../constants";
import Icon from "react-native-vector-icons/MaterialIcons";
import AddBoard from "./home/AddBoard";
import { userContext } from "../../context/userContext";
import { addBoard } from "../../api/firebase/realTime/boards";

const Tab = createBottomTabNavigator();

const Main = () => {
  const [showAddBoardForm, setShowAddBoardForm] = useState(false);
  const [title, setTitle] = useState('')

  const { user } = useContext(userContext)

  function handleAddBoard() {
    setShowAddBoardForm(true);
  }

  function handleAddBoardCancel() {
    setShowAddBoardForm(false);
  }

  function handleAddBoardAdd() {
    addBoard(user.uid, {
        title,
        important: "#45dd12",
    })
    setShowAddBoardForm(false);
  }

  function EmptyComponent() {
    return null;
  }

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.bottomBar,
          tabBarActiveTintColor: "#fff",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Homepage}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Icon name="home" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="EmptyComponent" //Render Empty Component
          component={EmptyComponent}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <View
                style={{
                  marginTop: "-10%",
                  backgroundColor: COLORS.dark_gray,
                  borderRadius: 50,
                  padding: 4,
                }}
              >
                <View
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: COLORS.dark_gray,
                    borderRadius: 50,
                    borderWidth: 2,
                    borderColor: COLORS.white,
                  }}
                >
                  <Icon
                    name="add"
                    size={44}
                    color={color}
                    style={{ textAlign: "center", color: COLORS.white }}
                  />
                </View>
              </View>
            ),
          }}
          listeners={() => ({
            tabPress: (event) => {
              event.preventDefault();
              handleAddBoard(event);
            },
          })}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <Icon name="person" size={25} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      {showAddBoardForm && <AddBoard title={title} setTitle={setTitle} cancel={handleAddBoardCancel} add={handleAddBoardAdd} />}
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: COLORS.dark_gray,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.75,
    elevation: 10,
    borderWidth: 0,
  },
});

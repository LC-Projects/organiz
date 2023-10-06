import { COLORS, ROUTES } from "../constants";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "../views/main/home/Homepage";
import Main from "../views/main/Main";
import ProjectBoard from "../views/main/home/projectBoard/ProjectBoard";
import TaskSettings from "../views/main/home/projectBoard/board/tasks/settings/TaskSettings";
import BoardSettings from "../views/main/home/projectBoard/board/settings/BoardSettings";
import { Button, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ButtonSetting from "../components/button/ButtonSetting/ButtonSetting";


const Stack = createStackNavigator();

const Access = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.HOMEPAGE}
        component={Main}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name={ROUTES.HOMEPAGE} component={ProjectBoard} /> */}
      {/* <Stack.Screen name={ROUTES.BOARD} component={Board} /> */}
      <Stack.Screen
        name={ROUTES.PROJECTBOARD}
        component={ProjectBoard}
        options={({ route }) => ({
          title: route.params.name,
          headerRight: () => (
            <ButtonSetting color={COLORS.black} horizontal onPress={() => route.params.boardSettingLink()} />
          ),
          headerTitleContainerStyle: { alignItems: 'center' }
        })}
      />
      <Stack.Screen
        name={ROUTES.TASKSETTINGS}
        component={TaskSettings}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name={ROUTES.BOARDSETTINGS}
        component={BoardSettings}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};

export default Access;

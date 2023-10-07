import { COLORS, ROUTES } from "../constants";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "../views/main/home/Homepage";
import Main from "../views/main/Main";
import Board from "../views/main/home/board/Board";
import TaskSettings from "../views/main/home/board/column/tasks/task/settings/TaskSettings";
import BoardSettings from "../views/main/home/board/settings/BoardSettings";
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
      <Stack.Screen
        name={ROUTES.PROJECTBOARD}
        component={Board}
        options={({ route, navigation }) => ({
          title: '[BOARD] - ' + route.params.name,
          headerRight: () => (
            <ButtonSetting color={COLORS.black} horizontal onPress={() => navigation.navigate(ROUTES.BOARDSETTINGS, {percentage: route.params.percentage, boardId: route.params.boardId, title: route.params.title, status: route.params.status })} />
          ),
          headerTitleContainerStyle: { alignItems: 'center' }
        })}
      />
      <Stack.Screen
        name={ROUTES.TASKSETTINGS}
        component={TaskSettings}
        options={({ route }) => ({ title: '[SETTINGS] - ' + route.params.title })}
      />
      <Stack.Screen
        name={ROUTES.BOARDSETTINGS}
        component={BoardSettings}
        options={({ route }) => ({ title: '[SETTINGS] - ' + route.params.title })}
      />
    </Stack.Navigator>
  );
};

export default Access;

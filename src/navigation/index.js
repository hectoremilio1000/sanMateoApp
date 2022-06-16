import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation, FontAwesome5, AntDesign } from "@expo/vector-icons";

import HomeSolicitar from "../screens/HomeSolicitar";
import MyTopTabs from "./MyTopTabs";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Laboratorio San Mateo"
        component={HomeTabs}
        options={{ headerShow: false }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeSolicitar}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Estudios"
        component={MyTopTabs}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="pdffile1" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;

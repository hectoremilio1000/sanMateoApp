import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Profile from "../screens/Profile";
import VerEstudios from "../screens/VerEstudios";
import EstudioPdf from "../components/Resultado";

import { Auth, Hub } from "aws-amplify";

import SignInScreen from "../screens/SignInScreen/index";
import NewPasswordScreen from "../screens/NewPasswordScreen/index";
import ForgotPasswordScreen from "../screens/ForgotPassword/index";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen/index";
import SignUpScreen from "../screens/SignUpScreen/index";

const LogIn = createNativeStackNavigator();

const LogInNavigator = () => {
  return (
    <LogIn.Navigator screenOptions={{ headerShown: false }}>
      <LogIn.Screen name="SignIn" component={SignInScreen} />
      <LogIn.Screen name="NewPassword" component={NewPasswordScreen} />
      <LogIn.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <LogIn.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      <LogIn.Screen name="SignUp" component={SignUpScreen} />
    </LogIn.Navigator>
  );
};

const TabTop = createMaterialTopTabNavigator();

function MyTopTabs() {
  const [authUser, setAuthUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setAuthUser(authUser);
    } catch (error) {
      setAuthUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === "signIn" || data.payload.event === "signOut") {
        checkUser();
      }
    };
    Hub.listen("auth", listener);
    return () => Hub.remove("auth", listener);
  }, []);

  if (authUser === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <TabTop.Navigator screenOptions={{ headerShown: false }}>
      {authUser ? (
        <>
          <TabTop.Screen
            name="VerEstudios"
            component={VerEstudiosNavigator}
            options={{ headerShown: false }}
          />
          <TabTop.Screen name="Perfil" component={Profile} />
        </>
      ) : (
        <TabTop.Screen
          name="Sesion"
          component={LogInNavigator}
          options={{ headerShown: false }}
        />
      )}
    </TabTop.Navigator>
  );
}

const StackVerEstudios = createNativeStackNavigator();

const VerEstudiosNavigator = () => {
  return (
    <StackVerEstudios.Navigator>
      <StackVerEstudios.Screen
        name="EstudiosSolicitados"
        component={VerEstudios}
        options={{ headerShown: false }}
      />
      <StackVerEstudios.Screen
        name="Resultado"
        component={EstudioPdf}
        options={{ headerShown: false }}
      />
    </StackVerEstudios.Navigator>
  );
};

export default MyTopTabs;

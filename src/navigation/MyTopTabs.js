import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Profile from "../screens/Profile";
import VerEstudios from "../screens/VerEstudios";
import EstudioPdf from "../components/Resultado";

import Amplify, { Auth } from "aws-amplify";
import { I18n } from "aws-amplify";
import awsconfig from "../aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";

I18n.setLanguage("es");
I18n.putVocabularies({
  es: {
    "Enter your username": "Ingresa tu email",
    "Enter your password": "Ingresa tu contraseña",
    "Please Sign In": "Por favor Inicia Sesión",
    "Iniciar sesíon": "Iniciar sesión",
    "Sign In": "Iniciar Sesión",
    "Sign Up": "Regístrate",
    "Create Account": "Regístrate",
    "Your code is on the way. To log in, enter the code we emailed to":
      "Se envió el código de confirmación al email proporcionado.",
    "It may take a minute to arrive.": "Puede tardar unos minutos en llegar.",
    "Invalid verification code provided, please try again.":
      "Código de verificación inválido, por favor intenta de nuevo.",
    "Send code": "Enviar código",
    "Cannot reset password for the user as there is no registered/verified email or phone_number":
      "No se puede reestablecer la contraseña para el usuario ya que no se encuentra registrado/ el email no está verificado o tampoco el número de teléfono.",
  },
});

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

const TabTop = createMaterialTopTabNavigator();

function MyTopTabs() {
  return (
    <TabTop.Navigator>
      <TabTop.Screen name="VerEstudios" component={VerEstudiosNavigator} />
      <TabTop.Screen name="Perfil" component={Profile} />
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

export default withAuthenticator(MyTopTabs);

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Pressable,
} from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Role } from "../../models";

const Profile = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    Auth.currentAuthenticatedUser().then(setUser);
  }, []);

  // const [name, setName] = useState("");
  // const [direccion, setDireccion] = useState("");
  // const [whats, setWhats] = useState("");
  // const [email, setEmail] = useState("");

  // const onSave = () => {
  //   console.warn("guardar");
  // };

  const signOut = () => {
    Auth.signOut();
  };

  return (
    <View>
      <Text style={styles.title}>Hola {user.username}</Text>

      <Text style={styles.input}>
        Próximamente tendremos más información para ti
      </Text>
      {/* <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Nombre Completo"
        style={styles.input}
      />
      <TextInput
        value={direccion}
        onChangeText={setDireccion}
        placeholder="Dirección completa"
        style={styles.input}
      />
      <TextInput
        value={whats}
        onChangeText={setWhats}
        placeholder="Whats"
        style={styles.input}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}
      /> */}

      {/* <View style={{ backgroundColor: "blue", margin: 10, borderRadius: 10 }}>
        <Button onPress={onSave} title="Guardar" color="white" />
      </View> */}

      <Text
        onPress={signOut}
        style={{
          width: "100%",
          textAlign: "center",
          color: "red",
          marginTop: "auto",
          marginVertical: 20,
          fontSize: 20,
        }}
      >
        Cerrar Sesión
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    textAlign: "center",
    padding: 15,
    borderRadius: 5,
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default Profile;

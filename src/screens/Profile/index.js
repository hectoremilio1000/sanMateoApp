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
import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Role } from "../../models";

const Profile = () => {
  const [name, setName] = useState("");
  const [direccion, setDireccion] = useState("");
  const [whats, setWhats] = useState("");
  const [email, setEmail] = useState("");
  const [roleUsuario, setRoleUsuario] = useState(Role.PACIENTE);
  const onSave = () => {
    console.warn("guardar");
  };
  return (
    <View>
      <Text style={styles.title}>Perfil</Text>
      <TextInput
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
      />
      <Text style={styles.subtitle}>Escoge tu Rol de Usuario</Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Pressable
          onPress={() => setRoleUsuario(Role.DOCTOR)}
          style={{
            backgroundColor: roleUsuario === Role.DOCTOR ? "#3FC060" : "white",
            margin: 10,
            padding: 10,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 10,
          }}
        >
          <Fontisto name="doctor" size={24} color="black">
            <Text> Doctor</Text>
          </Fontisto>
        </Pressable>
        <Pressable
          onPress={() => setRoleUsuario(Role.PACIENTE)}
          style={{
            backgroundColor:
              roleUsuario === Role.PACIENTE ? "#3FC060" : "white",
            margin: 10,
            padding: 10,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 10,
          }}
        >
          <Ionicons name="person-outline" size={24} color="black">
            <Text> Paciente</Text>
          </Ionicons>
        </Pressable>
      </View>
      <View style={{ backgroundColor: "blue", margin: 10, borderRadius: 10 }}>
        <Button onPress={onSave} title="Guardar" color="white" />
      </View>

      <Text
        onPress={() => Auth.signOut()}
        style={{
          textAlign: "center",
          color: "red",
          margin: 10,
          marginBottom: "auto",
        }}
      >
        Cerrar sesión
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
    backgroundColor: "white",
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

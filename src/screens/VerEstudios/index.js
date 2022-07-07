import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import EstudiosPaciente from "../../components/EstudiosPaciente";

import { Auth, DataStore } from "aws-amplify";
import { Paciente } from "../../models";

const VerEstudios = () => {
  const [user, setUser] = useState("");
  const [pacientes, setPacientes] = useState(null);
  let emailAuth = user?.attributes?.email;

  useEffect(() => {
    Auth.currentAuthenticatedUser().then(setUser);
  }, []);

  useEffect(() => {
    if (!emailAuth) {
      return;
    }
    DataStore.query(Paciente, paciente => paciente.email("eq", emailAuth)).then(
      paciente => setPacientes(paciente[0])
    );
  }, [emailAuth]);

  return (
    <View>
      <Text style={styles.title}>Estudios Solicitados</Text>
      <EstudiosPaciente pacientes={pacientes} />
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
});

export default VerEstudios;

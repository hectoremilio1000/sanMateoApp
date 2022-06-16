import { View, Text, StyleSheet } from "react-native";
import React from "react";
import EstudiosPaciente from "../../components/EstudiosPaciente";
import ordenes from "../../../assets/data/ordenes";

const VerEstudios = () => {
  return (
    <View>
      <Text style={styles.title}>Estudios Solicitados</Text>
      <EstudiosPaciente ordenes={ordenes} />
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

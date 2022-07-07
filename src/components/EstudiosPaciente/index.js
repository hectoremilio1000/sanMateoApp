import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import EstudiosMap from "../EstudiosMap";

const EstudiosPaciente = ({ pacientes }) => {
  const navigation = useNavigation();
  if (pacientes) {
    return (
      <Pressable
        onPress={() => navigation.navigate("Resultado", { id: pacientes.id })}
        style={{
          flexDirection: "row",
          borderColor: "#3FC060",
          borderWidth: 2,
          borderRadius: 12,
          margin: 10,
        }}
        key={pacientes?.id}
      >
        <EstudiosMap
          pacienteEstudios={pacientes?.estudios}
          pacienteFecha={pacientes?.fechaOrden}
        />
      </Pressable>
    );
  }
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="small" />
    </View>
  );

  // <Pressable
  //       onPress={() => navigation.navigate("Resultado", { id: pacientes.id })}
  //       style={{
  //         flexDirection: "row",
  //         borderColor: "#3FC060",
  //         borderWidth: 2,
  //         borderRadius: 12,
  //         margin: 10,
  //       }}
  //       // key={pacientes.id}
  //     >
  //        <EstudiosMap
  //         // pacienteEstudios={pacientes?.estudios}
  //         pacienteFecha={pacientes?.fechaOrden}
  //       />
  //     </Pressable>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
export default EstudiosPaciente;

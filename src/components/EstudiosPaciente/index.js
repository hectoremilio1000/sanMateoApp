import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import EstudiosMap from "../EstudiosMap";

const EstudiosPaciente = ({ ordenes }) => {
  const navigation = useNavigation();

  return (
    <>
      {ordenes.map(orden => (
        <Pressable
          onPress={() => navigation.navigate("Resultado", { id: orden.id })}
          style={{
            flexDirection: "row",
            borderColor: "#3FC060",
            borderWidth: 2,
            borderRadius: 12,
            margin: 10,
          }}
          key={orden.id}
        >
          <EstudiosMap
            ordenEstudios={orden.estudios}
            ordenFecha={orden.fechaEntregado}
          />
        </Pressable>
      ))}
    </>
  );
};

export default EstudiosPaciente;

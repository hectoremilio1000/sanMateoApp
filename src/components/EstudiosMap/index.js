import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const EstudiosMap = ({ ordenEstudios, ordenFecha }) => {
  const route = useRoute();
  const id = route.params?.id;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
      key={id}
    >
      <View style={{ marginLeft: 10, paddingVertical: 5 }}>
        {ordenEstudios.map(ordenEstudio => (
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            {ordenEstudio.titulo}
          </Text>
        ))}
      </View>
      <View
        style={{
          marginLeft: "auto",
          marginRight: 10,
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "grey" }}>{ordenFecha}</Text>
      </View>
    </View>
  );
};

export default EstudiosMap;

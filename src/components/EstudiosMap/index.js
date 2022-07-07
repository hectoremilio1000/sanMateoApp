import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const EstudiosMap = ({ pacienteEstudios, pacienteFecha }) => {
  // const route = useRoute();
  // const id = route.params?.id;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View style={{ marginLeft: 10, paddingVertical: 5 }}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          {pacienteEstudios}
        </Text>
      </View>
      <View
        style={{
          marginLeft: "auto",
          marginRight: 10,
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "grey" }}>{pacienteFecha}</Text>
      </View>
    </View>
  );
};

export default EstudiosMap;

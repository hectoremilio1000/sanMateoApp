import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

import React from "react";

const PdfReader = ({ url: uri }) => (
  <WebView javaScriptEnabled={true} style={{ flex: 1 }} source={{ uri }} />
);

const EstudioPdf = () => {
  return (
    <View style={styles.container}>
      <PdfReader url="https://imagenesrutalab.s3.amazonaws.com/quikyempresa/resultadoPCRCOVIDGUILLERMO.pdf" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#ecf0f1",
  },
});

export default EstudioPdf;

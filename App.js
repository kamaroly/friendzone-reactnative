import React from "react";
import Home from "./src/app/components/Home";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e375d",
    alignItems: "center",
    justifyContent: "center"
  }
});

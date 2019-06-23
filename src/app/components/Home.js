import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no Friend home!</Text>
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e375d",
    color: "#fbae24"
  },
  text: {
    color: "#fbae24"
  }
});

import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>See all Friends!</Text>
        <Button
          title="Go to Friends"
          onPress={() => this.props.navigation.navigate("Friends")}
        />
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e375d",
    alignItems: "center",
    justifyContent: "center"
  }
});

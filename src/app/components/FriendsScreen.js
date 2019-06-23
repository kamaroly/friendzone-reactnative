import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default class FriendsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add Friends Here</Text>
        {this.props.screenProps.possibleFriends.map((friend, index) => (
          <Button
            key={friend}
            title={`Add ${friend}`}
            onPress={() => this.props.screenProps.addFriend(index)}
          />
        ))}
        <Button
          title="Back Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  }
});

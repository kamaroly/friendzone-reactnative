import React from "react";
import { View, Text } from "react-native";
import AppNavigator from "./src/app/navigation/AppNavigator";
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  state = {
    possibleFriends: [
      "Angel KEZA",
      "Paul KAMARO",
      "Assoumpta UMWALI",
      "Elizabeth KIBABU",
      "Appolinarie MUKARUTABANA",
      "Joshua MWANGI",
      "Jemimah MUTHONI",
      "ABDI",
      "Steven NGATIA"
    ],
    currentFriends: []
  };

  addFriend = friendIndex => {
    // Copy current state
    const { currentFriends, possibleFriends } = this.state;
    // Get added friend based on the index.
    const addedFriend = possibleFriends.splice(friendIndex, 1);
    // Add Friends to current friends.
    currentFriends.push(addedFriend);
    // Update state
    this.setState({ possibleFriends, currentFriends });
  };

  render() {
    return (
      <AppContainer
        screenProps={{
          possibleFriends: this.state.possibleFriends,
          currentFriends: this.state.currentFriends,
          addFriend: this.addFriend
        }}
      />
    );
  }
}

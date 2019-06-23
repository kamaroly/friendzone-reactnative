import React from "react";
import { View, Text } from "react-native";
import AppNavigator from "./src/app/navigation/AppNavigator";
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

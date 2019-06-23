import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "../components/HomeScreen";
import FriendsScreen from "../components/FriendsScreen";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Friends: {
    screen: FriendsScreen
  }
});

export default AppNavigator;

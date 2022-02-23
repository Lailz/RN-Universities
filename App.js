import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import UniversityList from "./components/university/UniversityList";

const { Navigator, Screen } = createStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Navigator initialRouteName="Home">
          <Screen name="Home" component={Home} />
          <Screen
            name="List"
            component={UniversityList}
            options={{ headerLeft: null }}
          />
          <Screen name="Favorite" component={UniversityList} />
        </Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

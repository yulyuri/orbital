const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import WhatAreYouLookingFor from "./components/WhatAreYouLookingFor";
import SignUp from "./screens/SignUp";
import Splash from "./screens/Splash";
import LookingFor from "./screens/LookingFor";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import Friends from "./screens/Friends";
import NextQuestion from "./screens/NextQuestion";
import Roommates from "./screens/Roommates";
import ProjectMate from "./screens/ProjectMate";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LookingFor"
              component={LookingFor}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Friends"
              component={Friends}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Roommates"
              component={Roommates}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProjectMate"
              component={ProjectMate}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NextQuestion"
              component={NextQuestion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splash />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;

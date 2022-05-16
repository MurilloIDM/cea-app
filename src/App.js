import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { registerRootComponent } from "expo";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import FreePost from "./screens/FreePost";
import Login from "./screens/Login";
import ExclusivePost from "./screens/ExclusivePost";
import LoaderLogin from "./screens/LoaderLogin";

const Stack = createNativeStackNavigator();
const { Navigator, Screen } = Stack;

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Montserrat": require("../assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
      "Montserrat-ExtraBold": require("../assets/fonts/Montserrat-ExtraBold.ttf"),
    });

    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  return fontsLoaded && (
    <SafeAreaProvider style={{ backgroundColor: "#BFB372" }}>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
<<<<<<< HEAD
=======
          <Screen
            name="ExclusiveContent"
            component={ExclusivePost}
          />
>>>>>>> 8911120 (Update: Survey working)
          <Screen
            name="Home"
            component={Home}
          />

          <Screen
            name="FreeContent"
            component={FreePost}
          />

          <Screen
            name="EmailLogin"
            component={Login}
          />

<<<<<<< HEAD
          <Screen
            name="LoaderLogin"
            component={LoaderLogin}
          />

          <Screen
            name="ExclusiveContent"
            component={ExclusivePost}
          />
=======

>>>>>>> 8911120 (Update: Survey working)

        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default registerRootComponent(App);

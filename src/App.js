import React, { useContext, useEffect, useState } from "react";
import * as Font from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Login from "./screens/Login";
import FreePost from "./screens/FreePost";
import Comments from "./screens/Comments";
import InDbWithPass from "./screens/InDbWithPass";
import ExclusivePost from "./screens/ExclusivePost";
import RegisterPassword from "./screens/RegisterPassword";
import PassRecovery from "./screens/PassRecovery";

import { AuthContext } from "./context/AuthProvider";

const Stack = createNativeStackNavigator();
const { Navigator, Screen } = Stack;

const App = () => {
  const { authenticated, validateSession } = useContext(AuthContext);

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
    (async () => {
      await loadFonts();
      await validateSession()
    })();
  }, []);

  return fontsLoaded && (
    <SafeAreaProvider style={{ backgroundColor: "#BFB372" }}>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>

          {!authenticated ? (
            <>
              <Screen
                name="Home"
                component={Home}
              />

              <Screen
                name="EmailLogin"
                component={Login}
              />

              <Screen
                name="InDbWithPass"
                component={InDbWithPass}
              />

              <Screen
                name="FreeContent"
                component={FreePost}
              />
            </>
          ) : (
            <>
              <Screen
                name="ExclusiveContent"
                component={ExclusivePost}
              />

              <Screen
                name="Comments"
                component={Comments}
              />
            </>
          )}

          <Screen
            name="RegisterPassword"
            component={RegisterPassword}
          />

          <Screen
            name="PassRecovery"
            component={PassRecovery}
          />

        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

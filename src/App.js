import React, { useEffect, useState } from "react";

import * as Font from "expo-font";
import { registerRootComponent } from "expo";
import { StyleSheet, View } from "react-native";
import Loader from './components/Loader';

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
    <View style={styles.container}>
      <Loader disabled={true} color='green' size={200} />
      {/* Teste seu componente aqui: */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BFB372",
    justifyContent: 'center',
  }
});

export default registerRootComponent(App);

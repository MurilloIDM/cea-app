import { registerRootComponent } from "expo";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Modal from "./components/Modal";
import Input from "./components/Input";
import FormLead from "./components/FormLead";
import { Masks } from "react-native-mask-input";


const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [textInput, setTextInput] = useState("");

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

  const handleTextInput = (masked, unmasked) => {
    setTextInput(masked);

    console.log("masked -> ", masked);
    console.log("unmasked -> ", unmasked);
  }

  return fontsLoaded && (
    <View style={styles.container}>
      {/* Teste seu componente aqui: */}
      <TouchableOpacity
        onPress={() => setOpenModal(true)}
        style={styles.button}
      >
        <Text style={{ backgroundColor: "#000", color: "#fff", height: 40 }}>Clique em mim</Text>
      </TouchableOpacity>

      <FormLead
        visible={openModal}
        handleClose={() => setOpenModal(!openModal)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BFB372"
  },
  button: {
    marginTop: 70
  }
});

export default registerRootComponent(App);

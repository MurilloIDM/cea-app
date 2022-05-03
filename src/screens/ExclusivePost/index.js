import React from "react";
import { ScrollView, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import logoMain from "../../../assets/images/logoMain.png";

import styles from "./styles";

const ExclusivePost = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Image
          resizeMode="contain"
          style={styles.logoMain}
          source={logoMain}
        />
        <Feather
          name="menu"
          size={32}
          color="black"
        />
      </View>
      <ScrollView>
        {/* Componente Listagem */}
      </ScrollView>
      {/* Componente Menu */}
    </SafeAreaView>
  )
}

export default ExclusivePost;
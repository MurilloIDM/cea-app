import React, { useState } from "react";
import { ScrollView, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import logoMain from "../../../assets/images/logoMain.png";

import MenuConfig from "../../components/MenuConfig";

import styles from "./styles";


const ExclusivePost = () => {
  const [modalVisible, setModalVisivle] = useState(false)

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
          size={40}
          color="black"
          onPress={() => setModalVisivle(true)}
        />
      </View>
      <ScrollView>
        {/* Componente Listagem */}
      </ScrollView>
      <MenuConfig
        visible={modalVisible}
        handleClose={() => setModalVisivle(false)}
      />
    </SafeAreaView>
  )
}

export default ExclusivePost;
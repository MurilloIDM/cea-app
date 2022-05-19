import React, { useState } from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import logoMain from "../../../assets/images/logoMain.png";

import ExclusivePostListing from "../../components/ExclusivePostListing";
import MenuConfig from "../../components/MenuConfig";

import styles from "./styles";


const ExclusivePost = () => {
  const [menuVisible, setMenuVisible] = useState(false)

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
          onPress={() => setMenuVisible(true)}
        />
      </View>

      <ExclusivePostListing />

      <MenuConfig
        visible={menuVisible}
        handleClose={() => setMenuVisible(false)}
      />
    </SafeAreaView>
  )
}

export default ExclusivePost;
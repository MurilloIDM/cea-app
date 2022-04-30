import React, {useState} from "react";
import { ScrollView, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import logoMain from "../../../assets/images/logoMain.png";

import MenuConfig from "../../components/MenuConfig";

import styles from "./styles";


const ExclusivePost = () => {
  const [modalVisible, setModalVisivle] = useState(true)

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
      <MenuConfig
        visible={modalVisible}
        handleClose={() => console.log("closed")}
      />
    </SafeAreaView>
  )
}

export default ExclusivePost;
import React, { useState } from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import logoMain from "../../../assets/images/logoMain.png";

import Survey from "../../components/Survey";
import MenuConfig from "../../components/MenuConfig";

import styles from "./styles";


const SURVEYMOCK = [
  {
    id: 1,
    description: "Opção A",
    votes: 30,
    percentageVotes: 10,
    hasVote: false
  },
  {
    id: 2,
    description: "Opção B",
    votes: 70,
    percentageVotes: 30,
    hasVote: false
  },
  {
    id: 3,
    description: "Opção C - Vários Caracteres para simular ellipsis",
    votes: 45,
    percentageVotes: 40,
    hasVote: false
  },
  {
    id: 4,
    description: "Opção D",
    votes: 2,
    percentageVotes: 20,
    hasVote: false
  },

]

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
      <Survey
        exclusivePostId={null}
        studentId={null}
        topics={SURVEYMOCK}
      />

      <MenuConfig
        visible={menuVisible}
        handleClose={() => setMenuVisible(false)}
      />
    </SafeAreaView>
  )
}

export default ExclusivePost;
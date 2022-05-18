import React, { useState } from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import logoMain from "../../../assets/images/logoMain.png";

import ContentExclusivePost from "../../components/ContentExclusivePost";
import MenuConfig from "../../components/MenuConfig";

import styles from "./styles";

const DATAMOCK = {
  id: 1,
  title: "Título do Post",
  type: "TEXT",
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit, animi sapiente veritatis harum delectus quibusdam maiores vel, magni est iste voluptatem earum dolor placeat illo facilis natus eos amet?',
  status: true,
  filed: true,
  createdAt: null,
  updatedAt: null,
  createdBy: null,
  updatedBy: null,
  totalComments: 10,
  //media:[]
  media: [{
    id: 1,
    url: "https://picsum.photos/300/300?random=1"
  },
  {
    id: 2,
    url: "https://picsum.photos/300/300?random=2"
  },
  {
    id: 3,
    url: "https://picsum.photos/300/300?random=3"
  }],
  pollTopics: [{
    id: 1,
    description: "Opção 01",
    votes: 10,
    hasVote: false
  },
  {
    id: 2,
    description: "Opção 02",
    votes: 20,
    hasVote: false
  },
  {
    id: 3,
    description: "Opção 03",
    votes: 15,
    hasVote: false
  }]
}

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
      <ContentExclusivePost
        data={DATAMOCK}
      />
      <MenuConfig
        visible={menuVisible}
        handleClose={() => setMenuVisible(false)}
      />
    </SafeAreaView>
  )
}

export default ExclusivePost;
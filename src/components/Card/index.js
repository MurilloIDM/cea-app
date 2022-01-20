import React, { useState } from "react";
import { Text, View, Image, Pressable } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";


const Card = ({ data }) => {
  const [expand, setExpand] = useState(false);

  const numberLines = expand ? 999 : 9;
  const iconNameButton = expand ? "up" : "down";
  const textButton = expand ? "Ver Menos" : "Ver Mais";
  const stylesExpand = !expand ? styles.closeCard : {};

  const handleExpand = () => setExpand(!expand);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={{ uri: data.urlImage }}
        />

        <View style={styles.content}>
          <Text style={styles.title}>{data.title}</Text>

          <Text
            ellipsizeMode="tail"
            numberOfLines={numberLines}
            style={[styles.text, stylesExpand]}
          >
            {data.text}
          </Text>

          <Text style={styles.date}>{data.date}</Text>
        </View>

        <Pressable
          onPress={handleExpand}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{textButton}</Text>

          <AntDesign
            size={22}
            name={iconNameButton}
            style={styles.buttonIcon}
          />
        </Pressable>
      </View>
    </View>
  );
}

Card.defaultProps = {
  title: "",
  text: "",
  date: "00/00/00",
  urlImage: "",
}

export default Card;
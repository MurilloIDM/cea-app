import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Button from "../../../components/Button";

import styles from "../styles";

const EmptyPosts = ({ handleClick }) => {
  return (
    <View style={styles.containerEmpty}>
      <MaterialCommunityIcons
        size={64}
        color="black"
        name="mailbox-open-up-outline"
        style={styles.iconEmpty}
      />
      <Text style={styles.titleEmpty}>Oops...</Text>
      <Text style={styles.descriptionEmpty}> Nenhum conteúdo foi encontrado :(</Text>

      <Button
        text="Recarregar"
        handleOnPress={handleClick}
        stylesButton={styles.buttonEmpty}
        stylesText={styles.buttonTextEmpty}
      />
    </View>
  );
}

export default EmptyPosts;
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

const TagError = ({ description }) => {
  return (
    <View style={styles.container}>
      <AntDesign
        size={16}
        style={styles.icon}
        name="exclamationcircle"
      />

      <Text style={styles.description}>
        {description}
      </Text>
    </View>
  );
};

export default TagError;

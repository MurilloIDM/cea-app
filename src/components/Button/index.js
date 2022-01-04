import { Pressable, Text } from "react-native";

import styles from "./styles";

const Button = ({
  text,
  disabled,
  stylesText,
  stylesButton,
  handleOnPress,
  stylesAnimated,
}) => {
  const stylesButtonAnimated = stylesAnimated ? stylesAnimated : styles.backgroundOpacity;

  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        stylesButton,
        pressed ? stylesButtonAnimated : {},
        disabled ? styles.disabled : {},
      ]}
      onPress={handleOnPress}
    >
      <Text style={[ styles.text, stylesText ]}>
        {text}
      </Text>
    </Pressable>

  );
}

export default Button;

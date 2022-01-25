import { ActivityIndicator, View } from "react-native";

const Loader = ({
  disabled,
  color,
  size,
  stylesContainer
}) => {

  return (
    !disabled && (
      <View style={stylesContainer}>
        <ActivityIndicator
          color={color}
          size={size}
        />
      </View>
    )
  )
};

Loader.defaultProps = {
  disabled: false,
  color: "#0B0B0B",
  size: 70,
  stylesContainer: {}
};

export default Loader;

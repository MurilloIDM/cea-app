import { ActivityIndicator, View } from "react-native";

const Loader = ({
  disabled,
  color,
  size,
}) => {

  return (
    !disabled && (
      <ActivityIndicator
        color={color}
        size={size}
      />)
  )
};

Loader.defaultProps = {
  disabled: false,
  color: "#0B0B0B",
  size: 70,
};
export default Loader;
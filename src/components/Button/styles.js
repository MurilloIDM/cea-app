import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 15,
    paddingVertical: 12.5,
    paddingHorizontal: 24,
    backgroundColor: "#000"
  },
  text: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Montserrat",
  },
  backgroundOpacity: {
    backgroundColor: "rgba(0, 0, 0, 0.7)"
  },
  disabled: {
    opacity: 0.4
  }
});

export default styles;

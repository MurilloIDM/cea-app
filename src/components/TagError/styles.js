import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 7,
    backgroundColor: "rgba(255, 0, 0, 0.45)"
  },
  description: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Montserrat",
    flex: 1,
    flexWrap: "wrap",
  },
  icon: {
    color: "#fff",
    paddingRight: 12,
  }
});

export default styles;

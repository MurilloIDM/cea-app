import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundExternal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modal: {
    width: "85%",
    borderRadius: 15,
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalTitle: {
    width: "92%",
    fontSize: 25,
    fontFamily: "Montserrat-ExtraBold",
    textAlign: "center"
  },
  iconClose: {
    width: "8%",
    marginTop: 6,
  }
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundExternal: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    paddingTop: 16,
    paddingHorizontal: 32,
  },
  title: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: "bold",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 16
  },
  containerSocial: {
    width: 182,
    paddingTop: 48,
    paddingBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  iconSocial: {
    width: 50,
    height: 50,
  }
});

export default styles;
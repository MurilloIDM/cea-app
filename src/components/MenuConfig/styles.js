import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundExternal: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 32,
  },
  label: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    textAlign: "center",
    marginLeft: -72,
    fontSize: 18,
    fontWeight: "bold",
    flexGrow: 1,
    alignSelf: "center"
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  iconSocial: {
    width: 50,
    height: 50,
  },
  headerConfigMenu: {
    flexDirection: "row",
    paddingVertical: 16
  },
  backButton: {
    paddingVertical: 10,
    paddingLeft: 0,
    paddingRight: 50,
    //backgroundColor: "blue",
    //borderWidth: 1
  }
});

export default styles;
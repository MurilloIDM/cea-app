import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BFB372",
  },
  statusBar: {
    backgroundColor: "#BFB372"
  },
  containerSocial: {
    width: 182,
    paddingTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconSocial: {
    width: 50,
    height: 50,
  },
  logoMain: {
    width: 317,
    flex: 1,
    alignSelf: "center",
  },
  containerButtons: {
    width: "80%",
  },
  buttonLogin: {
    marginBottom: 32,
  },
  buttonLoginText: {
    fontFamily: "Montserrat-Bold",
  },
  freeContent: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#0B0B0B",
    marginBottom: 30
  },
  freeContentText: {
    color: "#0B0B0B",
    fontFamily: "Montserrat-Bold"
  },
  freeContentAnimated: {
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  }
});

export default styles;

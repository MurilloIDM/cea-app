import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#BFB372"
  },

  loaderImg: {
    width: 280,
    alignSelf: "center",
    borderColor: "#0B0B0B",
    marginBottom: 20
  },

  description: {
    fontSize: 16,
    color: "#000",
    width: "100%",
    marginBottom: 0,
    fontFamily: "Montserrat-ExtraBold",
    textAlign: "center",
    paddingRight: 8,
    paddingLeft: 8,

  },
});

export default styles;
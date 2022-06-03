import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#BFB372",
  },
  logo: {
    width: 300,
    alignSelf: "center",
  },
  description: {
    fontSize: 16,
    color: "#000",
    width: "100%",
    marginBottom: 0,
    textAlign: "center",
    fontFamily: "Montserrat-ExtraBold",
  },
  form: {
    width: "90%",
    marginTop: 32,
    overflow: "scroll",
    alignSelf: "center",
  },
  inputPassword: {
    width: "100%",
    position: "relative",
  },
  icon: {
    height: 50,
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 33,
    right: 0,
  },
  button: {
    borderColor: "red",
    textAlign: "center",
    fontFamily: "Montserrat-Bold",
  },
  messageModal: {
    width: "80%",
    fontSize: 24,
    marginTop: 40,
    marginBottom: 70,
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "Montserrat"
  },
  buttonModal: {
    fontFamily: "Montserrat-Bold"
  }
});

export default styles;
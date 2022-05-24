import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#BFB372"
  },
  logo: {
    width: 300,
    alignSelf: "center",
  },
  title: {
    marginBottom: 50,
    width: "100%",
    fontSize: 24,
    fontFamily: "Montserrat-ExtraBold",
    textAlign: "center"
  },
  description: {
    fontSize: 16,
    color: "#000",
    width: "100%",
    marginBottom: 0,
    fontFamily: "Montserrat-ExtraBold",
    textAlign: "center"
  },
  form: {
    width: "90%",
    alignSelf: "center",
    overflow: "scroll",
  },
  buttonSubscribe: {
    fontFamily: "Montserrat-Bold"
  },
  textMessage: {
    width: "80%",
    fontSize: 24,
    marginTop: 40,
    marginBottom: 70,
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "Montserrat"
  },
  buttonClose: {
    fontFamily: "Montserrat-Bold"
  }
});

export default styles;
  
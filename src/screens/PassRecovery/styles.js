import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#BFB372",
    paddingHorizontal: 32
  },
  logo: {
    width: 300,
    alignSelf: "center",
  },
  title: {
    marginBottom: 20,
    width: "100%",
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
    textAlign: "center"
  },
  description: {
    fontSize: 16,
    color: "#000",
    fontFamily: "Montserrat",
    marginVertical: 16
  },
  email: {
    fontSize: 16,
    color: "#000",
    fontFamily: "Montserrat-ExtraBold",
  },
  form: {
    width: 150,
    alignSelf: "center"
  },
  buttonSubscribe: {
    fontFamily: "Montserrat-Bold"
  }
});

export default styles;

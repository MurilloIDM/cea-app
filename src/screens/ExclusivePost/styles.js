import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#BFB372",
  },
  containerIn: {
    width: "100%",
    height: "100%",
    paddingBottom: 10,
    backgroundColor: "#FFF"
  },
  header: {
    height: 72,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#BFB372"
  },
  logoMain: {
    width: 171,
    height: 40,
  },
  containerEmpty: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    justifyContent: "center",
    paddingHorizontal: "5%",
    backgroundColor: "#BFB372",
  },
  iconEmpty: {
    textAlign: "center"
  },
  titleEmpty: {
    fontSize: 32,
    textAlign: "center",
    fontFamily: "Montserrat-ExtraBold"
  },
  descriptionEmpty: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
  },
  buttonEmpty: {
    marginTop: 24,
  },
  buttonTextEmpty: {
    fontFamily: "Montserrat-SemiBold"
  },
  textMessageModal: {
    width: "80%",
    fontSize: 24,
    marginTop: 40,
    marginBottom: 70,
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "Montserrat"
  },
  buttonCloseModal: {
    fontFamily: "Montserrat-Bold"
  }
});

export default styles;
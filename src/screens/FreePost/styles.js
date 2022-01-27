import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#BFB372",
  },
  iconBackContainer: {
    width: "80%",
    marginTop: 24,
    marginBottom: 24,
  },
  iconBack: {
    width: 36,
  },
  titlePage: {
    width: "75%",
    marginBottom: 32,
  },
  scrollArea: {
    width: "80%",
  },
  containerButton: {
    paddingTop: 12,
    paddingBottom: 12
  },
  buttonForm: {
    borderWidth: 1,
    borderColor: "#0B0B0B",
    backgroundColor: "transparent",
  },
  buttonFormText: {
    color: "#0B0B0B",
    fontFamily: "Montserrat-Bold",
  },
  loading: {
    marginTop: "60%",
    alignSelf: "center"
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

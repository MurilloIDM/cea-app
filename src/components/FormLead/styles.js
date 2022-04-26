import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  modalHeader: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 16,
  },
  modalApresentation: {
    width: "90%",
    alignSelf: "center",
  },
  modalTitle: {
    width: "100%",
    fontSize: 24,
    fontFamily: "Montserrat-ExtraBold",
  },
  description: {
    fontSize: 16,
    color: "#000",
    width: "100%",
    paddingBottom: 64,
    fontFamily: "Montserrat"
  },
  iconClose: {
    width: "8%",
    marginTop: 6,
  },
  form: {
    width: "90%",
    alignSelf: "center",
    paddingBottom: 16,
  },
  buttonSubscribe: {
    fontFamily: "Montserrat-Bold",
  }
});

export default styles;

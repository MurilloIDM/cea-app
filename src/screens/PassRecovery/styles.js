import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');
const paddingHorizontalContainer = 32;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: "center",
    backgroundColor: "#BFB372",
    paddingHorizontal: paddingHorizontalContainer
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
    marginVertical: 8
  },
  email: {
    fontSize: 16,
    color: "#000",
    fontFamily: "Montserrat-ExtraBold",
  },
  form: {
    alignSelf: "center"
  },
  otpContainer: {
    alignSelf: 'center'
  },
  otpInput: {
    color: '#0b0b0b',
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: 'white',
    marginHorizontal: 8
  },
  reSend: {
    alignSelf: 'baseline',
    marginTop: 8,
    marginBottom: 32,
    width: width - paddingHorizontalContainer * 2,
    zIndex: 1
  },
  reSendText: {
    fontFamily: "Montserrat",
    textAlign: 'right',
    fontSize: 12,
  },
  tagError: {
    marginBottom: 0
  },
  buttonSubmit: {
    alignSelf: "center",
    width: width - paddingHorizontalContainer * 2
  },
  buttonSubmitText: {
    fontFamily: "Montserrat-Bold",
  }
});

export default styles;

import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    backgroundColor: "#BFB372",
  },
  header: {
    height: 72,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#BFB372"
  },
  headerTitle: {
    position: "absolute",
    width,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    padding: 16,
  },
  backButton: {
    width: '25%',
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1
  },
  commentTitleContainer: {
    backgroundColor: '#DDD',
    padding: 8
  },
  commentTitleText: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18
  },
  commentView: {
    backgroundColor: "white",
    flex: 1,
  },
  inputContainer: {
    justifyContent: "flex-end",
  },
  input: {
    fontFamily: 'Montserrat',
    paddingRight: 52,
    fontSize: 14,
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#DDD'
  },
  buttonSend: {
    position: "absolute",
    alignSelf: "flex-end",
    height: 52,
    width: 52,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputBadge: {
    width: '100%',
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#BFB372',
    opacity: 0.5,
    paddingHorizontal: 12,
  },
  inputBadgeStatus: {
    fontSize: 12,
    fontFamily: 'Montserrat',
  },
  inputTextStatus: {
    fontSize: 12,
    flex: 1,
    flexWrap: "wrap",
    fontFamily: 'Montserrat',
  },
  loader: {
    width,
    height,
    position: "absolute",
    justifyContent: "center"
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
  },
  footerLoader: {
    height: 40,
  },
});

export default styles;
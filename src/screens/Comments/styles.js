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
    justifyContent: "flex-end"
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
    width: '98%',
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    opacity: 0.5
  },
  inputBadgeStatus: {
    backgroundColor: '#BFB372',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    fontFamily: 'Montserrat',
    fontSize: 12,
    paddingHorizontal: 8
  },
  loader: {
    borderWidth: 1,
    position: "absolute",
    width,
    height,
    justifyContent: "center"
  }
});

export default styles;
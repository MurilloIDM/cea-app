import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginBottom: 32,
  },
  card: {
    width: "100%",
    borderRadius: 15,
    paddingBottom: 16,
    backgroundColor: '#fff',
    fontFamily: "Montserrat",
  },
  content: {
    paddingHorizontal: 16
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    textAlign: "left",
    fontFamily: "Montserrat-ExtraBold",
  },
  text: {
    minHeight: 175,
    fontSize: 16,
    marginTop: 20,
    textAlign: "left",
    fontFamily: "Montserrat",
  },
  date: {
    fontSize: 12,
    marginTop: 16,
    width: "100%",
    textAlign: "right",
    fontFamily: "Montserrat"
  },
  cardImage: {
    width: "100%",
    height: 145,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginTop: 16,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 15,
    color: "#000",
    fontFamily: "Montserrat"
  },
  buttonIcon: {
    fontSize: 12,
    marginLeft: 8,
    color: "#000"
  },
  closeCard: {
    height: 175,
    maxHeight: 175,
    overflow: "hidden"
  }
});
export default styles;
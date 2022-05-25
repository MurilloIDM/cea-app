import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    backgroundColor: "#BFB372"
  },
  header: {
    height: 72,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#BFB372"
  },
  headerTitle: {
    position: "absolute",
    width,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18
  },
  scrollView:{
    backgroundColor: "white"

  }
});

export default styles;
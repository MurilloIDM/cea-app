import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  img: {
    resizeMode: 'cover',
    width,
    height: width
  },
  container: {
    width
  },
  scroll: {
    width
  },
  pagination: {
    flexDirection: "row",
    height: 24,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationText: {
    paddingHorizontal: 4
  }
});

export default styles;

import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width
  },
  topicContainer: {
    width: '100%'
  }
});

export default styles;

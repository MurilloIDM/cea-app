import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    paddingHorizontal: 8,
    paddingBottom: 16,
    backgroundColor: 'white',
  },
  topicContainer: {
    width: '100%',
    height: 54,
    marginVertical: 8,
    paddingVertical: 16,
    borderRadius: 8
  },
  boxText: {
    paddingLeft: 16,
    paddingRight: 4,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  topicText: {
    flex: 1,
    fontFamily: 'Montserrat',
    fontSize: 17,
    letterSpacing: -0.5,
    paddingRight: 4,
  },
  percentText: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    marginLeft: 6
  },
  percentBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  percentBar: {
    position: "absolute",
    backgroundColor: 'black',
    borderRadius: 5,
    top: 0,
    bottom: 0,
    opacity: 0.2
  },
});

export default styles;

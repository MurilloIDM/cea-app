import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width
  },
  titleContainer: {
    width: '100%',
    backgroundColor: '#DDDDDD',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    marginLeft: 8
  },
  descriptionContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderTopColor: '#DDDDDD',
    borderTopWidth: 1
  },
  description: {
    fontFamily: 'Montserrat',
    fontSize: 14,
  }
});

export default styles;

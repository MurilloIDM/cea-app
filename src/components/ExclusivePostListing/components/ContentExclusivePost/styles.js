import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width
  },
  titleContainer: {
    width: '100%',
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8
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
  },
  commentContainer: {
    backgroundColor: 'white',
    borderTopColor: '#DDDDDD',
    borderTopWidth: 1,
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  commentText: {
    marginLeft: 8,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14
  },
  seeMoreLessText: {
    fontFamily: 'Montserrat-Bold'
  }
});

export default styles;

import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  titleContainer: {
    width: '100%',
    backgroundColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  title: {
    maxWidth: "100%",
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    marginLeft: 8,
    flex: 1,
    flexWrap: "wrap"
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
  containerLinks: {
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row'
  },
  commentText: {
    marginLeft: 8,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14
  },
  titleLinks: {
    marginLeft: 8,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14
  },
  linkLabel: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: '#0B0B0B',
    textDecorationLine: 'underline'
  },
  seeMoreLessText: {
    fontFamily: 'Montserrat-Bold'
  },
  loaderVote: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 2
  },
  listLinks: {
    marginTop: 24,
    overflow: 'scroll',
    maxHeight: 258,
  }
});

export default styles;

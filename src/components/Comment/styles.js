import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const widthAvatarBox = 56;

const styles = StyleSheet.create({
  container: {
    width,
    flexDirection: "row",
    backgroundColor: 'white',
    paddingTop: 8
  },
  avatar: {
    width: widthAvatarBox,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  commentBox: {
    width: width - widthAvatarBox,
    fontFamily: 'Montserrat',
    paddingRight: 8,
  },
  avatarImgBkg: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  avatarTxt: {
    fontFamily: 'Montserrat-ExtraBold'
  },
  userName: {
    fontFamily: 'Montserrat-ExtraBold'
  },
  commentText: {
    fontFamily: 'Montserrat',
    fontSize: 14
  },
  commentBottom: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8
  },
  dateLine: {
    fontFamily: 'Montserrat',
    color: '#888',
    fontSize: 12
  },
  replies: {
    paddingVertical: 8,
    flexDirection: 'row'
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '#888',
    height: 9,
    width: 64,
    marginRight: 16
  },
  seeReplies: {
    fontFamily: 'Montserrat',
    color: '#888',
    fontSize: 12,
    marginRight: 8
  },
  containerReply: {
    width: width - widthAvatarBox,
    flexDirection: "row",
    backgroundColor: 'white',
    paddingTop: 8
  },
  replyBox: {
    width: width - widthAvatarBox * 2,
    fontFamily: 'Montserrat',
    paddingRight: 8,
  }
});

export default styles;

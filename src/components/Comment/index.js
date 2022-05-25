import { useState, useEffect } from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import moment from "moment";

import avatarBkg from "../../../assets/images/avatarBkg.png"

import styles from "./styles";

import { Mock, Replies } from "./Mock";

const Comment = ({ handleReply }) => {
  const [comment, setComment] = useState({})
  const [replies, setReplies] = useState({});
  const [repliesIsLoading, setRepliesIsLoading] = useState(false);
  const [repliesOpen, setRepliesOpen] = useState(false);

  useEffect(() => {
    const data = {
      ...Mock,
      text: Mock.text.length > 255 ? Mock.text.substring(0, 255).trim().concat('...') : Mock.text,
      createdAt: getDateTime(Mock.createdAt),
      avatarTitle: getAvatarTitle(Mock.socialName ? Mock.socialName : Mock.authorName)
    }
    setComment(data);
  }, [])

  const getAvatarTitle = (data) => {
    const separatedNames = data.split(' ');
    const firstLetter = separatedNames[0].charAt(0).toUpperCase();
    const lastLetter = separatedNames.pop().charAt(0).toUpperCase();
    return firstLetter.concat(lastLetter);
  }

  const getDateTime = (date) => moment(date).format("DD/MM/YYYY [ às ] HH:mm")

  const getReplies = () => {
    return Replies;
  }

  const handleToggleReplies = () => setRepliesOpen(!repliesOpen);

  useEffect(() => {
    if (!repliesOpen) {
      setRepliesIsLoading(true);
      const data = getReplies();
      const adjustedData = data.content.map((reply) => (
        {
          ...reply,
          text: reply.text.length > 255 ? reply.text.substring(0, 255).trim().concat('...') : reply.text,
          createdAt: getDateTime(reply.createdAt),
          avatarTitle: getAvatarTitle(reply.socialName ? reply.socialName : reply.authorName)
        }
      ));

      setReplies(adjustedData);
      setRepliesIsLoading(false)
    }
  }, [repliesOpen])

  return (
    <>
      {comment && <View style={styles.container}>
        <View style={styles.avatar}>
          <ImageBackground
            style={styles.avatarImgBkg}
            source={avatarBkg}
            resizeMode={"contain"}
          >
            <Text style={styles.avatarTxt}>
              {comment.avatarTitle}
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.commentBox}>
          <Text style={styles.commentText}>
            <Text style={styles.userName}>{comment.socialName ? comment.socialName : comment.authorName} </Text>
            {comment.text}
          </Text>
          <View style={styles.commentBottom}>
            <Text style={styles.dateLine}>{comment.createdAt}</Text>
            <Pressable
              onPress={handleReply}
            >
              <Text style={styles.dateLine}>
                <AntDesign name="retweet" size={12} color="#888" /> Responder
              </Text>
            </Pressable>
          </View>
          <Pressable
            onPress={handleToggleReplies}
          >
            <View>
              <View style={styles.replies}>
                <View style={styles.line}></View>
                <Text style={styles.seeReplies}>
                  {!repliesIsLoading ?
                    repliesOpen ? "Ocultar respostas" : `Ver ${comment.totalCommentsReply} respostas`
                    : "Carregando..."}
                </Text>
                <AntDesign name={repliesOpen ? "down" : "right"} size={12} color="#888" style={{ alignSelf: 'center' }} />
              </View>
            </View>

            {repliesOpen && replies.map((reply) => (
              <View style={styles.containerReply} key={reply.id}>
                <View style={styles.avatar}>
                  <ImageBackground
                    style={styles.avatarImgBkg}
                    source={avatarBkg}
                    resizeMode={"contain"}
                  >
                    <Text style={styles.avatarTxt}>
                      {reply.avatarTitle}
                    </Text>
                  </ImageBackground>
                </View>
                <View style={styles.replyBox}>
                  <Text style={styles.commentText}>
                    <Text style={styles.userName}>
                      {reply.socialName ? reply.socialName : reply.authorName}
                    </Text> {reply.text}
                  </Text>
                  <View style={styles.commentBottom}>
                    <Text style={styles.dateLine}>
                      {reply.createdAt}
                    </Text>
                  </View>
                </View>
              </View>
            ))
            }
          </Pressable>
        </View>
      </View>
      }
    </>
  )
}

export default Comment;

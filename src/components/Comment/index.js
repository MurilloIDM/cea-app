import { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import moment from "moment";

import styles from "./styles";

import Replies from "./Mock";

const Comment = ({ data, handleReply }) => {
  const [replies, setReplies] = useState([]);
  const [repliesIsLoading, setRepliesIsLoading] = useState(false);
  const [repliesOpen, setRepliesOpen] = useState(false);

  const getAvatarTitle = (data) => {
    const separatedNames = data.split(' ');
    const firstLetter = separatedNames[0].charAt(0).toUpperCase();
    const lastLetter = separatedNames.pop().charAt(0).toUpperCase();
    return firstLetter.concat(lastLetter);
  }

  const getDateTime = (date) => moment(date).format("DD/MM/YYYY [ às ] HH:mm")

  const comment = {
    ...data,
    text: data.text.length > 255 ? data.text.substring(0, 255).trim().concat('...') : data.text,
    createdAt: getDateTime(data.createdAt),
    avatarTitle: getAvatarTitle(data.socialName ? data.socialName : data.authorName)
  }

  const getReplies = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Replies.content);
      }, 500);
    });
  }

  const handleToggleReplies = async () => {
    setRepliesOpen((current) => !current)
    if (!repliesOpen) {
      setRepliesIsLoading(true);
      const data = await getReplies();
      setReplies(data);
      setRepliesIsLoading(false)
    }
  }

  return (
    <>
      {comment && <View style={styles.container}>
        <View style={styles.avatar}>
          <LinearGradient
            colors={['rgba(191, 179, 114, 0.8)', 'rgb(191, 179, 114)']}
            style={styles.avatarImgBkg}
          >
            <Text style={styles.avatarTxt}>
              {comment.avatarTitle}
            </Text>
          </LinearGradient>
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
              style={styles.replyButton}
              hitSlop={10}
            >
              <Text style={styles.dateLine}>
                <AntDesign name="retweet" size={12} color="#888" /> Responder
              </Text>
            </Pressable>
          </View>
          {comment.totalCommentsReply > 0 &&
            <Pressable Pressable
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

              {!repliesIsLoading && repliesOpen && replies.map((reply) => {

                const adjustedReply = {
                  ...reply,
                  text: reply.text.length > 255 ? reply.text.substring(0, 255).trim().concat('...') : reply.text,
                  createdAt: getDateTime(reply.createdAt),
                  avatarTitle: getAvatarTitle(reply.socialName ? reply.socialName : reply.authorName)
                }

                return (
                  <View style={styles.containerReply} key={adjustedReply.id}>
                    <View style={styles.avatar}>
                      <LinearGradient
                        colors={['rgba(191, 179, 114, 0.8)', 'rgb(191, 179, 114)']}
                        style={styles.avatarImgBkg}
                      >
                        <Text style={styles.avatarTxt}>
                          {adjustedReply.avatarTitle}
                        </Text>
                      </LinearGradient>
                    </View>
                    <View style={styles.replyBox}>
                      <Text style={styles.commentText}>
                        <Text style={styles.userName}>
                          {adjustedReply.socialName ? adjustedReply.socialName : adjustedReply.authorName}
                        </Text> {adjustedReply.text}
                      </Text>
                      <View style={styles.commentBottom}>
                        <Text style={styles.dateLine}>
                          {adjustedReply.createdAt}
                        </Text>
                      </View>
                    </View>
                  </View>
                )
              })
              }
            </Pressable>}
        </View>
      </View>
      }
    </>
  )
}

export default Comment;

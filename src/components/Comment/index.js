import { useState } from "react";
import moment from "moment";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Pressable, FlatList, Image } from "react-native";

import Logo from "../../../assets/images/logo.png";

import _uniqBy from "lodash/unionBy";
import _orderBy from "lodash/orderBy";

import { findCommentsReply } from "../../network/services/ExclusivePostService";

import styles from "./styles";

const Comment = ({ data, studentId, handleReply, deleteCommentOrReply, validateAccessUser }) => {
  const [replies, setReplies] = useState([]);
  const [pageReply, setPageReply] = useState(1);
  const [repliesOpen, setRepliesOpen] = useState(false);
  const [repliesIsLoading, setRepliesIsLoading] = useState(false);

  const getAvatarTitle = (data) => {
    const separatedNames = data.split(" ");
    const firstLetter = separatedNames[0].charAt(0).toUpperCase();
    const lastLetter = separatedNames.pop().charAt(0).toUpperCase();
    return firstLetter.concat(lastLetter);
  }

  const getDateTime = (date) => moment(date).format("DD/MM/YYYY [ às ] HH:mm");

  const comment = {
    ...data,
    createdAt: getDateTime(data.createdAt),
    avatarTitle: getAvatarTitle(data.socialName ? data.socialName : data.authorName),
    text: data.text.length > 255 ? data.text.substring(0, 255).trim().concat("...") : data.text,
  }

  const getReplies = async () => {
    await validateAccessUser();

    setRepliesIsLoading(true);
    try {
      const response = await findCommentsReply(pageReply - 1, comment?.id);

      const totalPages = response?.totalPages;
      const totalElements = response?.totalElements;

      const updateValuePage = totalElements < (pageReply * 5)
        ? pageReply : totalPages > pageReply ? pageReply + 1 : pageReply;

      setPageReply(updateValuePage);

      const commentsReply = _uniqBy(response?.content, replies, "id");
      const orderCommentsReply = _orderBy(commentsReply, ["createdAt"], ["asc"]);
      setReplies(orderCommentsReply);
    } catch (e) {
      setReplies([]);
      setPageReply(1);
      setRepliesOpen(false);
    } finally {
      setRepliesIsLoading(false);
    }
  }

  const handleToggleReplies = async () => {
    if (comment.totalCommentsReply !== replies.length) {
      await getReplies();
      setRepliesOpen(true);
      return;
    }

    setReplies([]);
    setPageReply(1);
    setRepliesOpen((current) => !current);
  }

  const deleteReply = async (id) => {
    await handleToggleReplies();
    deleteCommentOrReply(id, studentId, "reply");
  }

  const renderReply = ({ item }) => {
    const adjustedReply = {
      ...item,
      text: item.text.length > 255 ? item.text.substring(0, 255).trim().concat("...") : item.text,
      createdAt: getDateTime(item.createdAt),
      avatarTitle: getAvatarTitle(item.socialName ? item.socialName : item.authorName),
    };

    return (
      <View style={styles.containerReply}>
        <View style={styles.avatar}>

          <LinearGradient
            colors={["rgba(191, 179, 114, 0.8)", "rgb(191, 179, 114)"]}
            style={styles.avatarImgBkg}
          >
            {adjustedReply.admin ?
              <Image
                source={Logo}
                style={styles.avatarImgBkg}
              />
              :
              <Text style={styles.avatarTxt}>
                {adjustedReply.avatarTitle}
              </Text>
            }
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

            {studentId === item?.authorId && (
              <Pressable
                hitSlop={10}
                onPress={() => deleteReply(item?.id)}
              >
                <Text style={styles.dateLine}>
                  <AntDesign name="delete" size={12} color="#888" /> Deletar
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    );
  }

  return (
    <>
      {comment && <View style={styles.container}>
        <View style={styles.avatar}>
          <LinearGradient
            colors={["rgba(191, 179, 114, 0.8)", "rgb(191, 179, 114)"]}
            style={styles.avatarImgBkg}
          >
            <Text style={styles.avatarTxt}>
              {comment.avatarTitle}
            </Text>
          </LinearGradient>
        </View>

        <View style={styles.commentBox}>
          <Text style={styles.commentText}>
            <Text style={styles.userName}>
              {comment.socialName ? comment.socialName + " " : comment.authorName + " "}
            </Text>

            {comment.text}
          </Text>

          <View style={styles.commentBottom}>
            <Text style={styles.dateLine}>{comment.createdAt}</Text>

            <View style={styles.containerAction}>
              <Pressable
                onPress={handleReply}
                style={styles.replyButton}
                hitSlop={10}
              >
                <Text style={styles.dateLine}>
                  <AntDesign name="retweet" size={12} color="#888" /> Responder
                </Text>
              </Pressable>

              {studentId === comment?.authorId && (
                <Pressable
                  hitSlop={10}
                  style={styles.deleteButton}
                  onPress={() => deleteCommentOrReply(comment?.id, studentId)}
                >
                  <Text style={styles.dateLine}>
                    <AntDesign name="delete" size={12} color="#888" /> Deletar
                  </Text>
                </Pressable>
              )}
            </View>
          </View>

          {comment.totalCommentsReply > 0 &&
            <View>
              {!repliesIsLoading && repliesOpen && (
                <FlatList
                  data={replies}
                  renderItem={renderReply}
                  keyExtractor={(item) => item?.id}
                />
              )}

              <Pressable
                Pressable
                onPress={handleToggleReplies}
              >
                <View>
                  <View style={styles.replies}>
                    <View style={styles.line}></View>
                    <Text style={styles.seeReplies}>
                      {!repliesIsLoading ?
                        repliesOpen && (comment.totalCommentsReply === replies.length)
                          ? "Ocultar respostas"
                          : `Ver ${!repliesOpen
                            ? comment.totalCommentsReply
                            : comment.totalCommentsReply - replies.length} respostas`
                        : "Carregando..."}
                    </Text>
                    <AntDesign
                      size={12}
                      color="#888"
                      style={{ alignSelf: "center" }}
                      name={repliesOpen && (comment.totalCommentsReply === replies.length) ? "up" : "right"}
                    />
                  </View>
                </View>
              </Pressable>
            </View>
          }
        </View>
      </View>
      }
    </>
  )
}

export default Comment;

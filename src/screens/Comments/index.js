import { useState, useEffect, useRef, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
  Pressable,
  KeyboardAvoidingView,
  TextInput,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from "react-native";

import { Ionicons, AntDesign } from "@expo/vector-icons";

import _uniqBy from "lodash/unionBy";
import _orderBy from "lodash/orderBy";

import Modal from "../../components/Modal";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import Comment from "../../components/Comment";

import {
  addComment,
  addCommentReply,
  deleteComment,
  deleteReplyComment,
  findComments,
} from "../../network/services/ExclusivePostService";

import {
  ERROR_GENERIC_TITLE,
  MESSAGE_ERROR_COMMENT_ADD, MESSAGE_ERROR_COMMENT_DELETE,
  MESSAGE_ERROR_COMMENT_REPLY_ADD, MESSAGE_ERROR_REPLY_DELETE,
} from "../../constants/ConstantsExclusivePost";
import { EXPIRED_ACCESS_MESSAGE, EXPIRED_ACCESS_TITLE } from "../../constants/ConstantsStudent";

import { AuthContext } from "../../context/AuthProvider";
import { getStudentId, studentTokenIsValid } from "../../utils/student";

import styles from "./styles";

const Comments = ({ navigation, route }) => {
  const { id: exclusivePostId, title } = route?.params?.exclusivePost;

  const input = useRef(null);
  const { handleLogout } = useContext(AuthContext);

  const [page, setPage] = useState(1);
  const [comments, setComments] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [studentId, setStudentId] = useState("");
  const [replyingTo, setReplyingTo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [errorModal, setModalError] = useState(false);
  const [loadingData, setLoadingData] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [messageErrorModal, setMessageErrorModal] = useState("");
  const [accessExpiredModal, setAccessExpiredModal] = useState(false);

  useEffect(() => {
    (async () => {
      await getComments();

      const studentId = await getStudentId();
      setStudentId(studentId);
    })();
  }, []);

  const handleBack = () => {
    navigation.navigate("ExclusiveContent", {});
  }

  const handleReply = (comment) => {
    setIsReplying(true)
    setReplyingTo(comment);
    input.current?.focus();
  }

  const handleChangeTextInput = (value) => setTextInput(value);

  const handleBlurTextInput = () => {
    if (isReplying) {
      setTextInput("");
      setIsReplying(false);
    }

    setInputFocused(false);
  }

  const getComments = async (latestComments = false, resetPages = false) => {
    await validateUserAndGetId();

    setLoadingData(true);
    try {
      const pageValue = resetPages ? 1 : page;
      const pageSelected = latestComments ? 1 : pageValue;
      const response = await findComments(pageSelected - 1, exclusivePostId);

      if (!latestComments) {
        const totalPages = response?.totalPages;
        const totalElements = response?.totalElements;

        const updateValuePage = totalElements < (page * 20)
          ? page : totalPages > page ? page + 1 : page;

        setPage(updateValuePage);
      }

      const actualData = pageSelected === 1 ? [] : comments;

      const uniqComments = _uniqBy(response?.content, actualData, "id");
      const orderComments = _orderBy(uniqComments, ["createdAt"], ["desc"]);

      setComments(orderComments);
    } catch (e) {
      setPage(1);
      setComments([]);
    } finally {
      setLoadingData(false);
    }
  }

  const deleteCommentOrReply = async (id, studentId, type = "comment") => {
    await validateUserAndGetId();

    setIsLoading(true);
    try {
      const payload = type === "comment" ? {
        commentId: id,
        userId: studentId,
      } : {
        commentReplyId: id,
        userId: studentId,
      };

      const action = type === "comment" ? deleteComment : deleteReplyComment;

      await action(payload);

      await getComments(false, true);
    } catch (e) {
      const message = type === "comment" ? MESSAGE_ERROR_COMMENT_DELETE : MESSAGE_ERROR_REPLY_DELETE;

      setModalError(true);
      setMessageErrorModal(message);
    } finally {
      setIsLoading(false);
    }
  }

  const submitComment = async () => {
    const accessId = await validateUserAndGetId();

    if (!textInput.trim().length) return;

    const action = !isReplying ? addComment : addCommentReply;

    const payload = !isReplying ? {
      text: textInput,
      exclusivePostId,
      studentId: accessId,
    } : {
      text: textInput,
      userId: accessId,
      commentId: replyingTo?.id,
    };

    setIsLoading(true);
    try {
      await action(payload);

      setTextInput("");

      if (isReplying) {
        setIsReplying(false);
      }

      setInputFocused(false);

      await getComments(true);
    } catch (e) {
      const messageError = !isReplying
        ? MESSAGE_ERROR_COMMENT_ADD
        : MESSAGE_ERROR_COMMENT_REPLY_ADD;

      setModalError(true);
      setMessageErrorModal(messageError);
    } finally {
      setIsLoading(false);
    }
  }

  const validateUserAndGetId = async () => {
    const accessExpired = await studentTokenIsValid();

    if (accessExpired) {
      setAccessExpiredModal(true);
      return;
    }

    const studentId = await getStudentId();
    return studentId;
  }

  const closeModalAccessExpired = async () => {
    setAccessExpiredModal(false);
    await handleLogout();
  }

  const closeModalError = () => setModalError(false);

  const renderComment = ({ item }) => {
    return (
      <Comment
        data={item}
        studentId={studentId}
        handleReply={() => handleReply(item)}
        validateAccessUser={validateUserAndGetId}
        deleteCommentOrReply={deleteCommentOrReply}
      />
    );
  }

  const renderLoader = () => {
    if (!loadingData || !comments.length) {
      return (
        <View style={styles.footerLoader} />
      );
    };

    return (
      <ActivityIndicator size={32} color="#BFB372" style={styles.footerLoader} />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={handleBack}
        >
          <AntDesign
            name="left"
            size={32}
            color="#0b0b0b"
          />
        </Pressable>

        <Text style={styles.headerTitle}>
          Comentários
        </Text>
      </View>

      <View style={styles.commentTitleContainer}>
        <Text style={styles.commentTitleText}>{title}</Text>
      </View>

      {isLoading ? (
        <Loader
          size={80}
          stylesContainer={styles.loader}
        />
      ) : (
        <KeyboardAvoidingView style={styles.commentView} enabled>
          <FlatList
            data={comments}
            renderItem={renderComment}
            keyExtractor={(item) => item.id}
            refreshControl={
              <RefreshControl
                colors={["#BFB372"]}
                refreshing={loadingData}
                onRefresh={() => getComments(true)}
              />
            }
            onEndReachedThreshold={0.1}
            onEndReached={() => getComments()}
            ListFooterComponent={renderLoader}
          />

          <View style={styles.inputContainer}>
            {inputFocused && (
              <View style={styles.inputBadge}>
                <Text style={styles.inputBadgeStatus}>
                  {
                    isReplying ?
                      `Respondendo comentário de ${replyingTo.socialName ? replyingTo.socialName : replyingTo.authorName}`
                      : `Comentando para '${title}'`
                  }
                </Text>
                <Text style={styles.inputBadgeStatus}>
                  {textInput.length}/255
                </Text>
              </View>
            )}

            <TextInput
              ref={input}
              maxLength={255}
              multiline={true}
              value={textInput}
              style={styles.input}
              onBlur={handleBlurTextInput}
              onChangeText={handleChangeTextInput}
              onFocus={() => setInputFocused(true)}
              placeholder={isReplying ? "Digite sua resposta" : "Digite seu comentário"}
            />

            <Pressable
              style={styles.buttonSend}
              onPress={submitComment}
            >
              <Ionicons
                name="send"
                size={32}
                color="#CCC"
              />
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      )}

      <Modal
        visible={accessExpiredModal}
        title={EXPIRED_ACCESS_TITLE}
        handleClose={closeModalAccessExpired}
      >
        <Text style={styles.textMessageModal}>
          {EXPIRED_ACCESS_MESSAGE}
        </Text>

        <Button
          text="Ok"
          stylesText={styles.buttonCloseModal}
          handleOnPress={closeModalAccessExpired}
        />
      </Modal>

      <Modal
        visible={errorModal}
        title={ERROR_GENERIC_TITLE}
        handleClose={closeModalError}
      >
        <Text style={styles.textMessageModal}>
          {messageErrorModal}
        </Text>

        <Button
          text="Ok"
          handleOnPress={closeModalError}
          stylesText={styles.buttonCloseModal}
        />
      </Modal>
    </SafeAreaView>
  )
}

export default Comments;
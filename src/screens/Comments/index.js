import { useState, useEffect, useRef } from "react";
import { Text, View, Pressable, ScrollView, KeyboardAvoidingView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import Mock from "./Mock";

import Loader from "../../components/Loader";
import Comment from '../../components/Comment';

import styles from "./styles";


const Comments = ({ navigation, route }) => {

  const { id: exclusivePostId, title } = route?.params?.exclusivePost;

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isReplying, setIsReplying] = useState(false);
  const [replyingTo, setReplyingTo] = useState({});
  const [textInput, setTextInput] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const input = useRef(null);

  const getData = () => {
    return new Promise((resolve) => {
      setTimeout(() =>
        resolve(Mock)
        , 1000)
    })
  }

  useEffect(() => {
    (async () => {
      const data = await getData();
      setIsLoading(false)
      setComments(data.content);
    })();
  }, [])

  const handleBack = () => {
    navigation.navigate("ExclusiveContent", {})
  }

  const handleReply = (comment) => {
    setIsReplying(true)
    setReplyingTo(comment);
    input.current.focus();
    console.log(`replicar para -> ${comment.socialName ? comment.socialName : comment.authorName}`)
  }

  const handleChangeTextInput = (value) => setTextInput(value);

  const handleBlurTextInput = () => {
    if (isReplying) {
      input.current.blur();
      setTextInput('');
      setIsReplying(false);
    }
    setInputFocused(false);
  }

  const submitComment = () => {
    if (isReplying) {
      console.log(`Responder '${textInput}' a ${replyingTo.socialName ? replyingTo.socialName : replyingTo.authorName}!`)
    }
    else {
      console.log(`Comentar '${textInput}'!`)
    }

    input.current.blur();
    setTextInput('');
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
      {isLoading ?
        <Loader
          size={80}
          stylesContainer={styles.loader}
        /> :
        <KeyboardAvoidingView style={styles.commentView} behavior="height" enabled >
          <ScrollView style={styles.scrollView}>
            {comments.length > 0 && comments.map((comment) => (
              <Comment
                key={comment.id}
                data={comment}
                handleReply={() => handleReply(comment)}
              />
            ))
            }
          </ScrollView>
          <View style={styles.inputContainer}>
            {inputFocused && <View style={styles.inputBadge}>
              <Text style={styles.inputBadgeStatus} >
                {isReplying ? `Respondendo comentário de ${replyingTo.socialName ? replyingTo.socialName : replyingTo.authorName}` : `Comentando para '${title}'`}
              </Text>
              <Text style={styles.inputBadgeStatus}>
                {textInput.length}/255
              </Text>
            </View>}
            <TextInput
              ref={input}
              style={styles.input}
              value={textInput}
              maxLength={255}
              multiline={true}
              placeholder={isReplying ? 'Digite sua resposta' : 'Digite seu comentário'}
              onChangeText={handleChangeTextInput}
              onBlur={handleBlurTextInput}
              onFocus={() => setInputFocused(true)}
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
      }
    </SafeAreaView >
  )
}

export default Comments;
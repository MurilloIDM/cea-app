import { useState, useEffect } from "react";
import { View, Text, Pressable, FlatList, Linking } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import Modal from "../../../Modal";
import Media from "./components/Media";
import Survey from "./components/Survey";


import styles from "./styles";
import Loader from "../../../Loader";
import { isEmpty } from "lodash";

const ContentExclusivePost = ({ data, handleVote, handlePressComments, loadingSurvey }) => {

  const [post, setPost] = useState({});
  const [descriptionEllipsis, setDescriptionEllipsis] = useState(false);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [seeMoreClicked, setSeeMoreClicked] = useState(false);
  const [openModalLinks, setOpenModalLinks] = useState(false);
  const [descriptionLengthInitialValue, setDescriptionLengthInitialValue] = useState(200);

  useEffect(() => {
    setPost(data);
    const initialLength = data.media.length === 0 ? descriptionLengthInitialValue * 5 : descriptionLengthInitialValue;
    data.media.length === 0 && setDescriptionLengthInitialValue(initialLength)
    setDescriptionLength(initialLength);
    setDescriptionEllipsis(data.description.length > initialLength ? true : false);
  }, [data]);

  const handleSeeMore = () => {
    setDescriptionLength(Number.MAX_SAFE_INTEGER);
    setDescriptionEllipsis(false);
    setSeeMoreClicked(true);
  }

  const handleSeeLess = () => {
    setDescriptionLength(descriptionLengthInitialValue);
    setDescriptionEllipsis(true);
    setSeeMoreClicked(false);
  }

  function renderLink({ item }) {
    return (
      <Text
        style={styles.linkLabel}
        onPress={() => Linking.openURL(item?.url)}
      >
        - Acessar '{item?.label}'.
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      {post && <View style={styles.titleContainer}>
        {post.type === 'SURVEY' ?
          <AntDesign name="bars" size={24} color="black" /> :
          <AntDesign name="paperclip" size={24} color="black" />
        }
        <Text style={styles.title}>{post.title}</Text>
      </View>}

      {post.type === 'TEXT' && (
        <Media data={post.media} />
      )}

      <View style={styles.descriptionContainer}>
        <Text
          style={styles.description}
        >
          {descriptionEllipsis ? `${post.description.substring(0, descriptionLength)} ` : `${post.description} `}
          {descriptionEllipsis &&
            <Text
              style={styles.seeMoreLessText}
              onPress={handleSeeMore}
            >
              ...ver mais
            </Text>
          }
          {seeMoreClicked &&
            <Text
              style={styles.seeMoreLessText}
              onPress={handleSeeLess}
            >
              ver menos
            </Text>
          }
        </Text>
      </View>

      {post.type === 'SURVEY' && (
        <>
          <Survey
            studentId={null}
            handleVote={handleVote}
            topics={post.pollTopics}
            exclusivePostId={post.id}
          />

          {(loadingSurvey?.id === post?.id && loadingSurvey) && (
            <View style={styles.loaderVote}>
              <Loader disabled={false} size={32} />
            </View>
          )}
        </>
      )}

      {post.type === 'TEXT' && !isEmpty(post?.links) && (
        <Pressable
          style={styles.containerLinks}
          onPress={() => setOpenModalLinks(true)}
        >
          <AntDesign name="link" size={24} color="black" />
          <Text style={styles.titleLinks}>Links de referência</Text>
        </Pressable>
      )}

      {post.type === 'TEXT' && (
        <Pressable
          style={styles.commentContainer}
          onPress={() => handlePressComments(post)}
        >
          <AntDesign name="message1" size={24} color="black" />
          <Text style={styles.commentText}>Comentários</Text>
        </Pressable>
      )}

      <Modal
        title={`Links de referência do conteúdo - ${post?.title}`}
        visible={openModalLinks}
        handleClose={() => setOpenModalLinks(false)}
      >
        <FlatList
          data={post?.links}
          renderItem={renderLink}
          style={styles.listLinks}
        />
      </Modal>
    </View>
  );
}

export default ContentExclusivePost;

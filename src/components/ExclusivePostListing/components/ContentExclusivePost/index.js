import { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import Media from './components/Media';
import Survey from './components/Survey';

import styles from "./styles";
import Loader from "../../../Loader";

const ContentExclusivePost = ({ data, handleVote, handlePressComments, loadingSurvey }) => {

  const [post, setPost] = useState({});
  const [descriptionEllipsis, setDescriptionEllipsis] = useState(false);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [seeMoreClicked, setSeeMoreClicked] = useState(false);
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

  return (
    <View style={styles.container}>
      {post && <View style={styles.titleContainer}>
        {post.type === 'SURVEY' ?
          <AntDesign name="bars" size={32} color="black" /> :
          <AntDesign name="paperclip" size={32} color="black" />
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

      {post.type === 'TEXT' && (
        <Pressable
          style={styles.commentContainer}
          onPress={() => handlePressComments(post)}
        >
          <AntDesign name="message1" size={24} color="black" />
          <Text style={styles.commentText}>Comentários</Text>
        </Pressable>
      )}
    </View>
  );
}

export default ContentExclusivePost;

import { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import Media from '../Media';
import Survey from '../Survey';

import styles from "./styles";

const ContentExclusivePost = ({ data }) => {

  const [post, setPost] = useState({});
  const [descriptionEllipsis, setDescriptionEllipsis] = useState(false);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [seeMoreClicked, setSeeMoreClicked] = useState(false);

  const descriptionLengthInitialValue = 200;

  useEffect(() => {
    setPost(data);
    setDescriptionEllipsis(data.description.length > descriptionLengthInitialValue ? true : false);
    setDescriptionLength(descriptionLengthInitialValue);
  }, [])

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

      {post.type === 'TEXT' &&
        <Media
          data={post.media}
        />}
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
      {
        post.type === 'SURVEY' &&
        <Survey
          exclusivePostId={post.id} comm
          studentId={null}
          topics={post.pollTopics}
        />
      }
      {
        post.type === 'TEXT' && post.totalComments > 0 &&
        <Pressable
          style={styles.commentContainer}
          onPress={() => console.log('Chamar tela de comentários')}
        >
          <AntDesign name="message1" size={40} color="black" />
          <Text style={styles.commentText}>{post.totalComments} Comentário{post.totalComments > 1 && 's'}</Text>
        </Pressable>
      }

    </View >
  );
}

export default ContentExclusivePost;

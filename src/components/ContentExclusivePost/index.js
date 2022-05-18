import { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import Media from '../Media';
import Survey from '../Survey';

import styles from "./styles";

const ContentExclusivePost = ({ data }) => {

  const [post, setPost] = useState({});

  useEffect(() => {
    setPost(data)
  }, [])

  return (
    <View style={styles.container}>
      {post && <View style={styles.titleContainer}>
        {post.type === 'SURVEY' ?
          <AntDesign name="bars" size={40} color="black" /> :
          <AntDesign name="paperclip" size={40} color="black" />
        }
        <Text style={styles.title}>{post.title}</Text>
      </View>}

      {post.type === 'TEXT' &&
        <Media
          data={post.media}
        />}
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{post.description}</Text>
      </View>
      {post.type === 'SURVEY' &&
        <Survey
          exclusivePostId={post.id} comm
          studentId={null}
          topics={post.pollTopics}
        />}
      {post.type === 'TEXT' &&
        <View>
          <AntDesign name="message1" size={24} color="black" />
        </View>
      }

    </View >
  );
}

export default ContentExclusivePost;

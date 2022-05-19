import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";

import ContentExclusivePost from '../ContentExclusivePost';

//import styles from "./styles";

import Mock from "./Mock";

const ExclusivePostListing = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(Mock.content)
  }, [])

  return (
    <ScrollView>
      {posts && posts.map((post) => (
        <ContentExclusivePost
          data={post}
          key={post.id}
        />
      ))}
    </ScrollView>
  );

}

export default ExclusivePostListing;

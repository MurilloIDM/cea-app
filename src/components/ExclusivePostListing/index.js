import React, { useState, useEffect } from "react";
import { FlatList, RefreshControl, View, ActivityIndicator } from "react-native";

import _map from "lodash/map";
import _find from "lodash/find";
import _uniqBy from "lodash/unionBy";
import _orderBy from "lodash/orderBy";
import _findIndex from "lodash/findIndex"

import ContentExclusivePost from "./components/ContentExclusivePost";
import EmptyPosts from "../../screens/ExclusivePost/components/EmptyPosts";

import { addVoteSurvey, findExclusivePost } from "../../network/services/ExclusivePostService";

import { getStudentId, studentTokenIsValid } from "../../utils/student";

import styles from "./styles";
import { MESSAGE_ERROR_VOTE } from "../../constants/ConstantsExclusivePost";

const ExclusivePostListing = ({ setErrorGeneric, handleAccessExpired, handlePressComments }) => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingSurvey, setLoadingSurvey] = useState({ id: null, loading: false });

  useEffect(() => {
    (async () => await getPosts())();
  }, []);

  const addVote = async (exclusivePostId, topicId) => {
    const accessExpired = await studentTokenIsValid();

    if (accessExpired) {
      handleAccessExpired(true);
      return;
    }

    const studentId = await getStudentId();

    const payload = {
      studentId,
      exclusivePostId,
      pollTopicsId: topicId,
    };

    setLoadingSurvey({ id: exclusivePostId, loading: true });
    try {
      const postUpdated = await addVoteSurvey(payload);

      const newPosts = _map(posts, (post) => {
        if (post.id !== exclusivePostId) return post;

        post.pollTopics = postUpdated?.pollTopics;
        return post;
      });

      setPosts(newPosts);
    } catch (e) {
      setErrorGeneric({ error: true, message: MESSAGE_ERROR_VOTE });
    } finally {
      setLoadingSurvey({ id: null, loading: false });
    }
  }

  const getPosts = async (latestPosts = false) => {
    const accessExpired = await studentTokenIsValid();

    if (accessExpired) {
      handleAccessExpired(true);
      return;
    }

    const studentId = await getStudentId();

    setLoading(true);
    try {
      const pageSelected = latestPosts ? 1 : page;
      const response = await findExclusivePost(pageSelected - 1, studentId);

      const totalPages = response.totalPages;
      const totalElements = response?.totalElements;

      const updateValuePage = totalElements < (pageSelected * 10)
        ? pageSelected : totalPages > pageSelected ? pageSelected + 1 : pageSelected;

      setPage(updateValuePage);

      if (posts.length === response?.totalElements && !latestPosts) return null;

      const savedPosts = latestPosts ? [] : posts;

      const uniqPosts = _uniqBy(response?.content, savedPosts, "id");
      const orderPosts = _orderBy(uniqPosts, ["createdAt"], ["desc"]);

      setPosts(orderPosts);
    } catch (e) {
      setPage(1);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }

  const renderPost = ({ item }) => {
    return (
      <ContentExclusivePost
        data={item}
        handleVote={addVote}
        loadingSurvey={loadingSurvey}
        handlePressComments={handlePressComments}
      />
    );
  }

  const renderLoader = () => {
    if (!loading || !posts.length) {
      return (
        <View style={styles.footerLoader} />
      );
    };

    return (
      <ActivityIndicator size={32} color="#BFB372" style={styles.footerLoader} />
    );
  }

  return (
    <>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => getPosts(true)}
            colors={["#BFB372"]}
          />
        }
        onEndReached={() => getPosts()}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderLoader}
      />

      {(posts.length === 0 && !loading) && <EmptyPosts handleClick={getPosts} />}
    </>
  );
}

export default ExclusivePostListing;

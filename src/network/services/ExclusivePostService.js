import { instancePrivate } from "../config/instancePrivate";

export const findExclusivePost = async (page, studentId) => {
  const config = {
    method: "GET",
    url: `/app/exclusive-posts/content?page=${page}&direction=DESC&studentId=${studentId}`,
  };

  const { data } = await instancePrivate.request(config);
  return data;
};

export const addComment = async (payload) => {
  const config = {
    method: "POST",
    data: payload,
    url: "/app/comments/create",
  };

  await instancePrivate.request(config);
};

export const addCommentReply = async (payload) => {
  const config = {
    method: "POST",
    data: payload,
    url: "/app/comments/reply/create",
  };

  await instancePrivate.request(config);
};

export const findComments = async (page, exclusivePostId) => {
  const config = {
    method: "GET",
    url: `/app/comments/exclusive-post/${exclusivePostId}?page=${page}`,
  };

  const { data } = await instancePrivate.request(config);
  return data;
};

export const findCommentsReply = async (page, commentId) => {
  const config = {
    method: "GET",
    url: `/app/comments/${commentId}/comments-reply?page=${page}`,
  };

  const { data } = await instancePrivate.request(config);
  return data;
};

export const deleteComment = async (payload) => {
  const config = {
    method: "PATCH",
    data: payload,
    url: "/app/comments/",
  };

  await instancePrivate.request(config);
};

export const deleteReplyComment = async (payload) => {
  const config = {
    method: "PATCH",
    data: payload,
    url: "/app/comments/reply",
  };

  await instancePrivate.request(config);
};

export const addVoteSurvey = async (payload) => {
  const config = {
    method: "POST",
    data: payload,
    url: "/app/exclusive-posts/survey/vote",
  };

  const { data } = await instancePrivate.request(config);
  return data;
}

import * as atypes from "../constants/actionTypes";

const getNews = (pageNumber) => ({
  type: atypes.GET_PAGE_REQUEST,
  payload: pageNumber
});

const setNews = (news) => ({
  type: atypes.GET_PAGE_SUCCESS,
  payload: news
});

const getNewsError = (error) => ({
  type: atypes.GET_PAGE_FAILURE,
  payload: error
});

const upVote = (storyId) => ({
  type: atypes.SET_UPVOTE_REQUEST,
  payload: storyId
});

const setUpvote = (story) => ({
  type: atypes.SET_UPVOTE_SUCCESS,
  payload: story
});

const upVoteError = (error) => ({
  type: atypes.SET_UPVOTE_FAILURE,
  payload: error
});

export { getNews, setNews, getNewsError, upVote, setUpvote, upVoteError };

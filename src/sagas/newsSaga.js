// import { toast } from "react-toastify";
import { call, put, takeEvery, select, take } from "redux-saga/effects";
import * as news from "../api/news";
import * as atypes from "../constants/actionTypes";
import { setNews, setUpvote } from "../actions";

function* getNews(params) {
  try {
    console.log("GET NEWS");
    console.log(params);
    const result = yield call(news.fetchNews, { page: params.payload });

    result.hits.map((story) => {
      if (story.points === null) story.points = 0;
    });
    console.log(result);
    if (result) {
      yield put(setNews({ ...result }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* watchGetNews() {
  console.log("watchGetNews");
  yield takeEvery(atypes.GET_PAGE_REQUEST, getNews);
}

function* upVoteStory(payload) {
  try {
    console.log("upVoteStory");
    const state = yield select();
    console.log(state.news);
    console.log(payload);
    let index = state.news.hits.findIndex(
      (story) => story.story_id === payload.payload
    );
    state.news.hits[index].points++;
    yield put(setUpvote(state.news.hits[index]));
  } catch (error) {
    console.log(error);
  }
}

function* watchUpVoteStory() {
  console.log("watchUpVoteStory");
  yield takeEvery(atypes.SET_UPVOTE_REQUEST, upVoteStory);
}

export default [watchGetNews(), watchUpVoteStory()];

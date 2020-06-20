// import { toast } from "react-toastify";
import { call, put, takeEvery, select, take } from "redux-saga/effects";
import * as news from "../api/news";
import * as atypes from "../constants/actionTypes";
import { setNews, setUpvote, hideStorySuccess } from "../actions";

function* getNews(params) {
  try {
    console.log("GET NEWS");
    console.log(params);
    const state = yield select();
    console.log("state");
    console.log(state);
    // retrieve a given page
    let result = yield call(news.fetchNews, { page: params.payload });
    // filter all user hidden stories
    result.hits = result.hits.filter(
      (story) => !state.hideReducer.hiddenStories.includes(story.objectID)
    );
    // update upvotes for any stories user had upvoted
    result.hits = result.hits.map((story) => {
      let prevStoryPoints = state.upvotedReducer[story.objectID];

      if (prevStoryPoints) {
        story.points = prevStoryPoints;
      }
      return { ...story };
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
    console.log(payload);
    let index = state.stories.hits.findIndex(
      (story) => story.objectID === payload.payload
    );
    state.stories.hits[index].points++;
    yield put(
      setUpvote({
        objectID: state.stories.hits[index].objectID,
        points: state.stories.hits[index].points
      })
    );
  } catch (error) {
    console.log(error);
  }
}

function* watchUpVoteStory() {
  console.log("watchUpVoteStory");
  yield takeEvery(atypes.SET_UPVOTE_REQUEST, upVoteStory);
}

function* hideAStory(payload) {
  try {
    console.log("hideAStory");
    console.log(payload);
    const state = yield select();
    yield put(hideStorySuccess(payload.payload));
  } catch (error) {
    console.log(error);
  }
}

function* watchHideStory() {
  console.log("watchUpVoteStory");
  yield takeEvery(atypes.SET_HIDE_REQUEST, hideAStory);
}

function* rehydrate() {
  const state = yield select();
  console.log("rehydrate");
  console.log(state);
}

function* watchRehydrate() {
  yield take(atypes.REHYDRATION_COMPLETE, rehydrate);
}

export default [
  watchGetNews(),
  watchUpVoteStory(),
  watchHideStory(),
  rehydrate()
];

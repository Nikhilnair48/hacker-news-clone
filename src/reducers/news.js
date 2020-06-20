import * as atypes from "../constants/actionTypes";

const newsReducer = (state = {}, action) => {
  console.log("reducer");
  console.log(state);
  console.log(action);
  switch (action.type) {
    case atypes.GET_PAGE_SUCCESS:
      return {
        ...action.payload
      };
    case atypes.GET_PAGE_FAILURE:
      return {};
    case atypes.SET_UPVOTE_SUCCESS:
      let index = state.hits.findIndex(
        (story) => action.payload.objectID === story.objectID
      );
      if (index > -1) state.hits[index].points = action.payload.points;
      return { ...state };
    case atypes.SET_HIDE_SUCCESS:
      let newState = state.hits.filter(
        (story) => story.objectID !== action.payload
      );
      state.hits = newState;
      return { ...state };
    default:
      return state;
  }
};

const upvotedReducer = (state = {}, action) => {
  console.log("reducer");
  console.log(state);
  console.log(action);
  switch (action.type) {
    case atypes.SET_UPVOTE_REQUEST:
      return state;
    case atypes.SET_UPVOTE_SUCCESS:
      const newData = { [action.payload.objectID]: action.payload.points };
      return { ...state, ...newData };
    case atypes.SET_UPVOTE_FAILURE:
      return state;
    default:
      return state;
  }
};

const hideReducer = (state = { hiddenStories: [] }, action) => {
  console.log("reducer");
  console.log(state);
  console.log(action);
  switch (action.type) {
    case atypes.SET_HIDE_REQUEST:
      return state;
    case atypes.SET_HIDE_SUCCESS:
      let hiddenStories = [];
      if (state.hiddenStories) {
        hiddenStories = [...state.hiddenStories];
      }
      hiddenStories.push(action.payload);
      return { ...state, hiddenStories: hiddenStories };
    case atypes.SET_HIDE_FAILURE:
      return state;
    default:
      return state;
  }
};

export { newsReducer, upvotedReducer, hideReducer };

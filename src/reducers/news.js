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
        (story) => story.story_id === action.payload.story_id
      );
      state.hits[index] = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default newsReducer;

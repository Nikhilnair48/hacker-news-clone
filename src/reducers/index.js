import { combineReducers } from "redux";
import { newsReducer, upvotedReducer, hideReducer } from "./news";
import chart from "./chart";
import {
  persistStore,
  persistReducer,
  persistCombineReducers
} from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

const storiesPersistConfig = {
  key: "stories",
  storage: storage
};

const upvotedReducerPersistConfig = {
  key: "upvotedReducer",
  storage: storage
};
const hideReducerPersistConfig = {
  key: "hideReducer",
  storage: storage
};

const rootReducer = combineReducers({
  stories: persistReducer(storiesPersistConfig, newsReducer),
  hideReducer: persistReducer(hideReducerPersistConfig, hideReducer),
  upvotedReducer: persistReducer(upvotedReducerPersistConfig, upvotedReducer)
});

export default persistReducer({ key: "primary", storage }, rootReducer);

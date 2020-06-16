import { combineReducers } from "redux";
import news from "./news";
import chart from "./chart";

const rootReducer = combineReducers({
  news: news
});

export default rootReducer;

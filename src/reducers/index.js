//ROOT REDUCER
import { combineReducers } from "redux";
import suggestions from "./suggestion.reducer";
import comments from "./comment.reducer";
import news from "./news.reducer";

export default combineReducers({
    suggestions,
    comments,
    news
});
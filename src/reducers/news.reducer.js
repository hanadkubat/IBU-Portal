const initialState = {
  news: [],
  error: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NEWS_REQUEST":
      return {
        ...state
      };
    case "ADD_NEWS_SUCCESS":
      return {
        ...state,
        news: [...state.news, action.news]
      };
    case "ADD_NEWS_FAILURE":
      return {
        ...state,
        error: action.error
      };
    case "GET_NEWS_REQUEST":
      return {
        ...state
      };
    case "GET_NEWS_SUCCESS":
      return {
        ...state,
        news: action.news
      };
    case "GET_NEWS_FAILURE":
      return {
        ...state,
        error: action.error
      };
    case "DELETE_NEWS_REQUEST":
      return {
        ...state
      };
    case "DELETE_NEWS_SUCCESS": {
      let nIndex = state.news.findIndex(n => n._id === action.newsId);
      let news = [...state.news];
      news.splice(nIndex, 1);
      return {
        ...state,
        news
      };
    }
    case "DELETE_NEWS_FAILURE":
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

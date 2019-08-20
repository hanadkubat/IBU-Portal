const initialState = {
  comments: [],
  error: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COMMENTS_REQUEST":
      return {
        ...state
      };
    case "GET_COMMENTS_SUCCESS":
      return {
        ...state,
        comments: action.comments
      };
    case "GET_COMMENTS_FAILURE":
      return {
        ...state,
        error: action.error
      };
    case "DELETE_COMMENT_REQUEST":
      return {
        ...state
      };
    case "DELETE_COMMENT_SUCCESS": {
      let sIndex = state.comments.findIndex(s => s._id === action.commentId);
      let comments = [...state.comments];
      comments.splice(sIndex, 1);
      return {
        ...state,
        comments
      };
    }
    case "DELETE_COMMENT_FAILURE":
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

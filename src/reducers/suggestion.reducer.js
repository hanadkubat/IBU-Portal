const initialState = {
  suggestions: [],
  error: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_SUGGESTIONS_REQUEST":
      return {
        ...state
      };
    case "GET_SUGGESTIONS_SUCCESS":
      return {
        ...state,
        suggestions: action.suggestions
      };
    case "GET_SUGGESTIONS_FAILURE":
      return {
        ...state,
        error: action.error
      };
    case "ADD_SUGGESTIONS_REQUEST":
      return {
        ...state
      };
    case "ADD_SUGGESTIONS_SUCCESS":
      return {
        ...state,
        suggestions: [...state.suggestions, action.suggestion]
      };
    case "ADD_SUGGESTIONS_FAILURE":
      return {
        ...state,
        error: action.error
      };
    case "APPROVE_SUGGESTIONS_REQUEST":
      return {
        ...state
      };
    case "APPROVE_SUGGESTIONS_SUCCESS": {
      let sIndex = state.suggestions.findIndex(
        s => s._id === action.suggestionId
      );
      let suggestions = [...state.suggestions];
      suggestions[sIndex].approved = true;
      return {
        ...state,
        suggestions
      };
    }
    case "APPROVE_SUGGESTIONS_FAILURE":
      return {
        ...state,
        error: action.error
      };
    case "DELETE_SUGGESTIONS_REQUEST":
      return {
        ...state
      };
    case "DELETE_SUGGESTIONS_SUCCESS": {
      let sIndex = state.suggestions.findIndex(
        s => s._id === action.suggestionId
      );
      let suggestions = [...state.suggestions];
      suggestions.splice(sIndex, 1);
      return {
        ...state,
        suggestions
      };
    }
    case "DELETE_SUGGESTIONS_FAILURE":
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

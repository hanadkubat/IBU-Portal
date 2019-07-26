const initialState = {
    suggestions: [],
    error: {}
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case 'GET_SUGGESTIONS_REQUEST':
            return {
                ...state,
            }
        case 'GET_SUGGESTIONS_SUCCESS':
            return {
                ...state,
                suggestions: action.suggestions
            }
        case 'GET_SUGGESTIONS_FAILURE':
            return{
                ...state,
                error: action.error
            }
        default:
            return state
    }
}
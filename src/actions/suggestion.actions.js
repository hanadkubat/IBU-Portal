import { suggestionsApi } from '../api';

export const getAllSuggestions = () => (dispatch) => {
    dispatch(request())
    suggestionsApi.getAll()
    .then(data => {
        dispatch(success(data))
    })
    .catch(error => {
        console.log(error)
        dispatch(failure(error))
    })

    function request() { return { type: "GET_SUGGESTIONS_REQUEST" } }
    function success(suggestions) { return { type: "GET_SUGGESTIONS_SUCCESS", suggestions } }
    function failure(error) { return { type: "GET_SUGGESTIONS_FAILURE", error } }
}

export const addSuggestion = (title, content) => (dispatch) => {
    dispatch(request())
    suggestionsApi.addSuggestion(title, content)
    .then(data => {
        dispatch(success(data))
    })
    .catch(error => {
        console.log(error)
        dispatch(failure(error))
    })
    
    function request() { return { type: "ADD_SUGGESTIONS_REQUEST" } }
    function success(suggestion) { return { type: "ADD_SUGGESTIONS_SUCCESS", suggestion } }
    function failure(error) { return { type: "ADD_SUGGESTIONS_FAILURE", error } }
}

export const approveSuggestion = (id) => (dispatch) => {
    dispatch(request())
    suggestionsApi.approveSuggestion(id)
    .then(data => {
        dispatch(success())
    })
    .catch(error => {
        console.log(error)
        dispatch(failure(error))
    })
    
    function request() { return { type: "APPROVE_SUGGESTIONS_REQUEST" } }
    function success() { return { type: "APPROVE_SUGGESTIONS_SUCCESS", suggestionId: id } }
    function failure(error) { return { type: "APPROVE_SUGGESTIONS_FAILURE", error } }
}


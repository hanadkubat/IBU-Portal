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
        dispatch(success(id))
    })
    .catch(error => {
        console.log(error)
        dispatch(failure(error))
    })
    
    function request() { return { type: "APPROVE_SUGGESTIONS_REQUEST" } }
    function success(id) { return { type: "APPROVE_SUGGESTIONS_SUCCESS", suggestionId: id } }
    function failure(error) { return { type: "APPROVE_SUGGESTIONS_FAILURE", error } }
}

export const activateSuggestion = (id, active) => (dispatch) => {
    dispatch(request())
    suggestionsApi.activateSuggestion(id, active)
    .then(data => {
        console.log(data);
        dispatch(success(id))
    })
    .catch(error => {
        console.log(error)
        dispatch(failure(error))
    })
    
    function request() { return { type: "ACTIVATE_SUGGESTIONS_REQUEST" } }
    function success(id) { return { type: "ACTIVATE_SUGGESTIONS_SUCCESS", suggestionId: id, active } }
    function failure(error) { return { type: "ACTIVATE_SUGGESTIONS_FAILURE", error } }
}

export const deleteSuggestion = (id) => (dispatch) => {
    dispatch(request())
    suggestionsApi.deleteSuggestion(id)
    .then(data => {
        dispatch(success(id))
    })
    .catch(error => {
        console.log(error)
        dispatch(failure(error))
    })

    function request() { return { type: "DELETE_SUGGESTIONS_REQUEST" } }
    function success(id) { return { type: "DELETE_SUGGESTIONS_SUCCESS", suggestionId: id } }
    function failure(error) { return { type: "DELETE_SUGGESTIONS_FAILURE", error } }
}
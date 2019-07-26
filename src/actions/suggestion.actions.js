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
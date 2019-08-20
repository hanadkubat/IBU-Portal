import { commentsApi } from '../api';

export const getAllComments = () => (dispatch) => {
    dispatch(request())
    commentsApi.getAll()
    .then(data => {
        dispatch(success(data))
    })
    .catch(error => {
        console.log(error)
        dispatch(failure(error))
    })

    function request() { return { type: "GET_COMMENTS_REQUEST" } }
    function success(comments) { return { type: "GET_COMMENTS_SUCCESS", comments } }
    function failure(error) { return { type: "GET_COMMENTS_FAILURE", error } }
}

export const deleteComment = (id) => (dispatch) => {
    dispatch(request())
    commentsApi.deleteComment(id)
    .then(data => {
        dispatch(success(id))
    })
    .catch(error => {
        console.log(error)
        dispatch(failure(error))
    })

    function request() { return { type: "DELETE_COMMENT_REQUEST" } }
    function success(id) { return { type: "DELETE_COMMENT_SUCCESS", commentId: id } }
    function failure(error) { return { type: "DELETE_COMMENT_FAILURE", error } }
}